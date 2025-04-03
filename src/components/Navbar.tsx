
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && position >= section.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-gradient">Joseph</a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {["home", "about", "skills", "education", "projects", "contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item)}
              className={cn(
                "capitalize", 
                activeSection === item 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item}
            </Button>
          ))}
          <Button 
            variant="default" 
            size="sm" 
            className="ml-2 bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Joseph_Vineeth_Reddy_Resume.pdf';
              link.click();
            }}
          >
            Resume
          </Button>
        </nav>
        
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => {
            const mobileNav = document.getElementById('mobile-nav');
            if (mobileNav) {
              mobileNav.classList.toggle('hidden');
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
      
      <div id="mobile-nav" className="md:hidden hidden bg-white/95 backdrop-blur-sm absolute w-full py-4 shadow-md">
        <div className="container mx-auto px-4 flex flex-col space-y-2">
          {["home", "about", "skills", "education", "projects", "contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className={cn(
                "justify-start capitalize w-full", 
                activeSection === item 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground"
              )}
              onClick={() => {
                scrollToSection(item);
                const mobileNav = document.getElementById('mobile-nav');
                if (mobileNav) {
                  mobileNav.classList.add('hidden');
                }
              }}
            >
              {item}
            </Button>
          ))}
          <Button 
            variant="default" 
            className="justify-start w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Joseph_Vineeth_Reddy_Resume.pdf';
              link.click();
              const mobileNav = document.getElementById('mobile-nav');
              if (mobileNav) {
                mobileNav.classList.add('hidden');
              }
            }}
          >
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
