import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-primary-foreground/60 font-medium tracking-wide">
           &copy; {new Date().getFullYear()} Bristlecone Companies
        </div>

        <div className="text-sm text-primary-foreground/60 font-medium tracking-wide">
            hello@bristleconecompanies.com
        </div>

        <div className="flex gap-4 text-primary-foreground/80">
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:info@bristleconecompanies.com" className="hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
        </div>
      </div>
    </footer>
  );
}
