"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Home, BookOpen, RotateCcw } from 'lucide-react';

export default function NotFound() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number; delay: number }[]>([]);
  const [meteors, setMeteors] = useState<{ top: number; left: number; duration: number; delay: number; size: number }[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random stars for the background
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    const generateMeteors = () => {
      const newMeteors = [];
      for (let i = 0; i < 5; i++) {
        newMeteors.push({
          top: Math.random() * 50,
          left: Math.random() * 30 + 60,
          duration: Math.random() * 3 + 3,
          delay: Math.random() * 15,
          size: Math.random() * 100 + 50,
        });
      }
      setMeteors(newMeteors);
    };

    generateStars();
    generateMeteors();
    
    // Fade in animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    // Interactive star effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create a subtle glow effect where the mouse is
      const glow = document.createElement('div');
      glow.className = 'space-dust';
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.boxShadow = '0 0 20px 5px rgba(255,255,255,0.3)';
      glow.style.width = '2px';
      glow.style.height = '2px';
      glow.style.opacity = '0';
      glow.style.transition = 'opacity 2s';
      
      containerRef.current.appendChild(glow);
      
      // Fade in and out
      setTimeout(() => {
        glow.style.opacity = '1';
        setTimeout(() => {
          glow.style.opacity = '0';
          setTimeout(() => {
            glow.remove();
          }, 2000);
        }, 500);
      }, 10);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Navbar />
      <div 
        ref={containerRef}
        className="relative flex-grow flex flex-col items-center justify-center overflow-hidden"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      >
        {/* Nebula effects */}
        <div className="nebula bg-purple-500" style={{ width: '500px', height: '500px', top: '20%', left: '15%' }}></div>
        <div className="nebula bg-blue-500" style={{ width: '400px', height: '400px', bottom: '10%', right: '20%' }}></div>
        
        {/* Stars background */}
        <div className="absolute inset-0 z-0">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
        
        {/* Shooting meteors */}
        {meteors.map((meteor, index) => (
          <div
            key={`meteor-${index}`}
            className="absolute animate-meteor"
            style={{
              top: `${meteor.top}%`,
              left: `${meteor.left}%`,
              animationDuration: `${meteor.duration}s`,
              animationDelay: `${meteor.delay}s`,
            }}
          >
            <div 
              className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
              style={{ 
                boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.7)',
                transform: 'rotate(-45deg)'
              }}
            />
          </div>
        ))}

        {/* Orbit rings */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-gray-800 rounded-full opacity-20 animate-orbit" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-gray-800 rounded-full opacity-10 animate-orbit-reverse" />
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-gray-700 rounded-full opacity-30 animate-orbit" style={{ animationDuration: '20s' }} />

        {/* 404 Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 md:py-32">
          {/* Error Code */}
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
            <span className="text-shimmer">
              <span className="text-green-500">4</span>
              <span className="text-white">0</span>
              <span className="text-green-500">4</span>
            </span>
          </h1>

          {/* Lost Astronaut */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow" />
            
            <Image
              src="/svg/astronaut.svg"
              alt="Lost astronaut"
              width={320}
              height={320}
              className="w-full h-full animate-float"
              priority
            />
            
            {/* Orbiting elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-dashed border-green-500 animate-spin-slow opacity-70" />
            <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-green-500/20 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-blue-500/20 animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Message */}
          <div className="text-center max-w-2xl backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-shimmer">
              Houston, We Have a Problem!
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              The page you're looking for has drifted into deep space or doesn't exist. 
              Our astronaut is searching for it, but in the meantime, let's get you back to the mothership.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="group px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/5 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Return to Home</span>
              </Link>
              <Link
                href="/dashboard/learning"
                className="group px-6 py-3 border border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Go to Learning Hub</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="group px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/5 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5 transition-transform group-hover:rotate-90" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}