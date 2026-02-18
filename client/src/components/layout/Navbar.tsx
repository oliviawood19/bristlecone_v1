import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Mail, Linkedin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import signatureLogo from "@assets/Bristlecone_Signature Logo.png";
import pineconeLogo from "@assets/pinecone-logo-transparent.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-background"
    >
      <div className="container-custom flex items-center justify-between py-4 border-b border-primary">
        <Link href="/" className="z-50 relative">
          <img
            src={pineconeLogo}
            alt="Bristlecone Companies"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 h-12 w-auto object-contain transition-all duration-500 ease-in-out",
              isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-75"
            )}
          />
          <img
            src={signatureLogo}
            alt="Bristlecone Companies"
            className={cn(
              "h-10 w-auto object-contain transition-all duration-500 ease-in-out",
              isScrolled ? "opacity-0 scale-75" : "opacity-100 scale-100"
            )}
          />
        </Link>

        {/* Desktop - Connect button */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:hello@bristleconecompanies.com"
            className="group inline-flex items-center gap-2 rounded-none border border-primary bg-transparent px-5 py-2 text-base font-medium font-serif text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="z-50 relative text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[100vw] sm:w-[100vw] h-full border-none bg-background p-0 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-8 text-center items-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-500">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                We'd love to hear from you.
              </p>
            </div>

            <div className="absolute bottom-8 flex gap-6 text-muted-foreground">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:hello@bristleconecompanies.com" className="hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
