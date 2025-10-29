import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X, BookOpen } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Catálogo", path: "/catalogo" },
    { name: "Gêneros", path: "/generos" },
    { name: "Meus Livros", path: "/meus-livros" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--navy))] text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-display font-bold transition-smooth hover:text-[hsl(var(--gold))]"
        >
          <BookOpen className="h-6 w-6" />
          <span>Livraria do Ke</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-smooth hover:text-[hsl(var(--gold))] ${
                isActive(link.path) ? "text-[hsl(var(--gold))]" : ""
              } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-[hsl(var(--gold))] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isActive(link.path) ? "after:scale-x-100" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-[hsl(var(--gold))]"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/auth">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-[hsl(var(--gold))]"
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[hsl(var(--navy))] text-white border-l-[hsl(var(--navy-light))]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-smooth hover:text-[hsl(var(--gold))] ${
                      isActive(link.path) ? "text-[hsl(var(--gold))]" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-lg font-medium transition-smooth hover:text-[hsl(var(--gold))]"
                >
                  <User className="h-5 w-5" />
                  <span>Perfil</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
