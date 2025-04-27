import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin, Send, ArrowRight } from 'lucide-react';

export default function ComingSoonWebsite() {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setLoaded(true);
    
    // Simulate progress increase over time
    const interval = setInterval(() => {
      setProgressValue(prev => {
        const newValue = prev + 1;
        return newValue <= 80 ? newValue : 80;
      });
    }, 100);

    // Calculate time until July 1st
    const calculateTimeLeft = () => {
      const now = new Date();
      const launchDate = new Date('2025-07-01T00:00:00');
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If the launch date has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    // Initial calculation
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubmitted(true);
      // This would typically connect to an API to save the email
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-900 text-stone-100 font-sans">
      {/* Parallax Background Images */}
      <div className="absolute inset-0 opacity-20">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/1200/800')] bg-cover bg-center transform scale-110" style={{ transform: 'translateY(-5%)' }}></div> */}
        <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform scale-110" 
            style={{ 
                backgroundImage: `url('/assets/background.webp')`,
                transform: 'translateY(-5%)'
            }}
        ></div>

      </div>

      {/* Content Container */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Logo */}
        <div className="mb-6 transform translate-y-2">
          <div className="text-2xl font-light tracking-widest text-stone-200">LE CROWN</div>
          <div className="text-sm tracking-wider text-stone-400 text-center">INTERIORS DESIGN</div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-light text-center mb-6 tracking-wider">
          <span className="block">INSPIRING SPACES</span>
          <span className="block mt-2 text-stone-300">COMING SOON</span>
        </h1>

        {/* Description */}
        <p className="max-w-lg text-center text-stone-300 mb-12 leading-relaxed">
          Our full website is in the works. Soon, you'll be able to explore our stunning design projects, 
          innovative concepts, and transformative spaces that redefine luxury living.
        </p>

        {/* Countdown Timer */}
        <div className="w-full max-w-md mb-12">
          <h3 className="text-center text-stone-300 mb-4">Launching in</h3>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="text-2xl font-light text-stone-200">{timeLeft.days}</div>
              <div className="text-xs text-stone-400">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-stone-200">{timeLeft.hours}</div>
              <div className="text-xs text-stone-400">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-stone-200">{timeLeft.minutes}</div>
              <div className="text-xs text-stone-400">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-stone-200">{timeLeft.seconds}</div>
              <div className="text-xs text-stone-400">Seconds</div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="w-full max-w-md mb-12">
          <div className="flex justify-between text-xs text-stone-400 mb-2">
            <span>Website Progress</span>
            <span>{progressValue}%</span>
          </div>
          <div className="h-1 w-full bg-stone-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-stone-200 transition-all duration-1000 ease-out" 
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-stone-500 mt-2">
            <span>Design</span>
            <span>Development</span>
            <span>Launch</span>
          </div>
        </div>

        

        {/* Newsletter Signup */}
        <div className="w-full max-w-md mb-16">
          {!isSubmitted ? (
            <>
              <h3 className="text-center mb-4 text-stone-300">Get notified when we launch</h3>
              <form onSubmit={handleSubmit} className="flex w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 bg-stone-800 border border-stone-700 rounded-l-md text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-500"
                  required
                />
                <button 
                  type="submit" 
                  className="px-4 py-3 bg-stone-200 text-stone-900 rounded-r-md hover:bg-stone-300 transition-colors flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  <span>Notify Me</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-3 px-4 bg-stone-800 border border-stone-700 rounded-md">
              <p className="text-stone-200">Thank you! We'll notify you when we launch.</p>
            </div>
          )}
        </div>

        {/* Featured Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 w-full max-w-4xl px-4">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`aspect-square bg-stone-800 rounded-md overflow-hidden relative transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-cover bg-center hover:scale-105 transition-transform duration-700"></div> */}

              <div 
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: `url('/assets/design${i}.webp')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <button className="group flex items-center mb-16 py-3 px-6 border border-stone-700 rounded-full hover:bg-stone-800 transition-colors duration-300">
          <span className="mr-2">Explore Our Design Philosophy</span>
          <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Footer & Social */}
        <footer className="w-full max-w-4xl flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="" className="text-stone-400 hover:text-stone-200 transition-colors" target="_blank">
              <Instagram />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-200 transition-colors">
              <Facebook />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-200 transition-colors">
              <Linkedin />
            </a>
          </div>
          <p className="text-stone-500 text-sm">© 2025 LE Crown Interior Design. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}