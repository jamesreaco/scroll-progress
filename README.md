A simple page scroll progress component made with React.

## Getting Started

Create a new file called `ScrollProgress.tsx` then copy and paste the component below into the file.

```jsx
import { useState, useEffect } from 'react';

interface ScrollProgressProps {
  position: 'top' | 'bottom'
  height?: number
  zIndex?: number
  backgroundColor?: string
  gradient?: {
    start: string
    end: string
  }
}

export default function ScrollProgress(props: ScrollProgressProps) {

  const { 
    position, 
    height, 
    backgroundColor, 
    gradient, 
    zIndex 
  } = props
  
  const [scrollPercentage, setScrollPercentage] = useState(0)

  function handleScroll() {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100
    setScrollPercentage(percentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      style={{
        width: '100%',
        position: 'fixed',
        left: '0',
        right: '0',
        top: position === 'top' ? '0' : 'auto',
        bottom: position === 'bottom' ? '0' : 'auto',
        zIndex: zIndex ? zIndex : 9999,
      }}
    >
      <div
        style={{
          height: `${height}px` ?? '5px',
          width: `${scrollPercentage}%`,
          transition: 'width 0.1s',
          backgroundColor: `${backgroundColor}`,
          background: `linear-gradient(45deg, ${gradient?.start}, ${gradient?.end})`,
        }}
      />
    </div>
  )
}
```

Add the `ScrollProgress` component to the page you'd like the scroll progress bar to appear.

```jsx
import ScrollProgress from "./components/scroll-progress";

const App = () => {
  return (
    <div>
      <ScrollProgress 
        position="top" 
        height={6}
        gradient={{
          start: "green",
          end: "blue"
        }}
      />
    </div>
  );
};
```