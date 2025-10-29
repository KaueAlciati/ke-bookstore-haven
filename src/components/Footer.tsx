import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--navy))] text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-[hsl(var(--gold))]" />
              <span className="text-xl font-display font-bold">Livraria do Ke</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Conectando leitores a histórias incríveis desde 2024. 
              Descubra, leia e compartilhe sua paixão por livros conosco.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalogo" 
                  className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-[hsl(var(--gold))] transition-smooth"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-[hsl(var(--gold))] transition-smooth"
                asChild
              >
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-[hsl(var(--gold))] transition-smooth"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Livraria do Ke. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
