
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gradient-to-r from-purple-primary to-gradient-end text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Joseph Vineeth Reddy</h2>
            <p className="mt-2 text-white/80">Front End Developer</p>
          </div>

          <div className="mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20" 
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <hr className="my-6 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} Joseph Vineeth Reddy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
