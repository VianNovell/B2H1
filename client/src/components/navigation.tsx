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
import handBackHealthLogo from "@assets/Unknown_1755852214655.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location !== "/") {
      // Use window.location to navigate to home page
      window.location.href = "/";
      // Add delay for page load, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return;
    }
    
    // Already on home page, just scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-28">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-4 transition-all duration-300 hover:scale-105">
                <img 
                  src={logoImage} 
                  alt="Back 2 Health Logo" 
                  className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain drop-shadow-lg"
                />
                <div className="hidden sm:block">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">
                    Back 2 Health
                  </span>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    Chiropractic Wellness Centre
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link href="/" className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-blue))] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-green-50">
                Home
              </Link>
              
              <DropdownMenu open={isAboutHovered} onOpenChange={setIsAboutHovered}>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-[hsl(var(--neutral-dark))] hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-purple-50 flex items-center gap-1"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    About
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-white/95 backdrop-blur-sm border border-purple-100 shadow-lg"
                  onMouseEnter={() => setIsAboutHovered(true)}
                  onMouseLeave={() => setIsAboutHovered(false)}
                >
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="cursor-pointer hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600">
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/doctors" className="cursor-pointer hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600">
                      Our Doctors
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="cursor-pointer hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600">
                      Our Mission
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu open={isServicesHovered} onOpenChange={setIsServicesHovered}>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-[hsl(var(--neutral-dark))] hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 flex items-center gap-1"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                  >
                    Services
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-white/95 backdrop-blur-sm border border-blue-100 shadow-lg"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <DropdownMenuItem asChild>
                    <Link href="/service-detail/chiropractic" className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600">
                      Chiropractic Care
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service-detail/physiotherapy" className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600">
                      Physiotherapy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service-detail/therapeutic-massage" className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600">
                      Therapeutic Massage
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service-detail/pemf-therapy" className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600">
                      PEMF Therapy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service-detail/complex-cases-and-second-opinions" className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600">
                      Complex Cases and Second Opinions
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection("appointment")}
                      className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 font-medium w-full text-left px-2 py-1.5 rounded-sm"
                    >
                      Book Now
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/programs"
                className="text-[hsl(var(--neutral-dark))] hover:text-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-orange-50"
              >
                Programs
              </Link>
              <button
                onClick={() => scrollToSection("appointment")}
                className="text-[hsl(var(--neutral-dark))] hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-teal-50"
              >
                Contact
              </button>
              
              <Link
                href="/non-profit"
                className="flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                <img 
                  src={handBackHealthLogo} 
                  alt="Hand Back Health" 
                  className="h-8 w-8 object-contain mb-1"
                />
                <span className="text-xs font-medium text-[hsl(var(--neutral-dark))] text-center leading-tight">
                  Non Profit<br />Collaboration
                </span>
              </Link>
            </div>
          </div>


          
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[hsl(var(--neutral-dark))] hover:text-indigo-600 hover:bg-indigo-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--wellness-blue))] hover:bg-green-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-purple-600 hover:bg-purple-50 w-full text-left rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-blue-600 hover:bg-blue-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="/programs"
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-orange-600 hover:bg-orange-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Programs
            </Link>
            <button
              onClick={() => scrollToSection("appointment")}
              className="block px-4 py-3 text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-teal-600 hover:bg-teal-50 w-full text-left rounded-lg transition-all duration-200"
            >
              Contact
            </button>
            <Link
              href="/non-profit"
              className="flex items-center px-4 py-3 hover:bg-blue-50 w-full rounded-lg transition-all duration-200"
            >
              <img 
                src={handBackHealthLogo} 
                alt="Hand Back Health" 
                className="h-8 w-8 object-contain mr-3"
              />
              <span className="text-base font-medium text-[hsl(var(--neutral-dark))] hover:text-blue-600">
                Hand Back Health
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
