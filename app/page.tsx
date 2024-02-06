"use client"
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <div style={{ height: '2500px' }}>
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
}
