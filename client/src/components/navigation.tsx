import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logoImage from "@/assets/b2h-logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 transition-all duration-300 hover:scale-105">
                <img 
                  src={logoImage} 
                  alt="Back 2 Health Logo" 
                  className="h-12 w-12 md:h-14 md:w-14 object-contain"
                />
                <div className="hidden sm:block">
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Back 2 Health
                  </span>
                  <div className="text-xs text-gray-600 font-medium">
                    Chiropractic Wellness Centre
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link href="/" className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-green-50">
                Home
              </Link>
              
              <DropdownMenu open={isAboutHovered} onOpenChange={setIsAboutHovered}>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-green-50 flex items-center gap-1"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    About
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-white/95 backdrop-blur-sm border border-green-100 shadow-lg"
                  onMouseEnter={() => setIsAboutHovered(true)}
                  onMouseLeave={() => setIsAboutHovered(false)}
                >
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/doctors" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      Our Doctors
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      Our Mission
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu open={isServicesHovered} onOpenChange={setIsServicesHovered}>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-green-50 flex items-center gap-1"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                  >
                    Services
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-white/95 backdrop-blur-sm border border-green-100 shadow-lg"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <DropdownMenuItem asChild>
                    <Link href="/services" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/services" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      Chiropractic Care
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      Physiotherapy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      Massage Therapy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services" className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))]">
                      PEMF Therapy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection("appointment")}
                      className="cursor-pointer hover:bg-green-50 hover:text-[hsl(var(--wellness-green))] focus:bg-green-50 focus:text-[hsl(var(--wellness-green))] font-medium w-full text-left px-2 py-1.5 rounded-sm"
                    >
                      Book Now
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-green-50"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("appointment")}
                className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-green-50"
              >
                Contact
              </button>
              
              <a
                href="https://handbackhealth.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                NGO Platform
              </a>
            </div>
          </div>


          
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] hover:bg-green-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-green-100">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] hover:bg-green-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] hover:bg-green-50 w-full text-left rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] hover:bg-green-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Services
            </Link>
            <button
              onClick={() => scrollToSection("programs")}
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] hover:bg-green-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("appointment")}
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-green))] hover:bg-green-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Contact
            </button>
            <a
              href="https://handbackhealth.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-base font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all duration-200 text-center"
            >
              NGO Platform
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
