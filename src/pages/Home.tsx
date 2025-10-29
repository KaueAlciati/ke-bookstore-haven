import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, BookHeart, Rocket, Brain, Heart, Lock, BookMarked, Ghost } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bg.jpg";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Buscando por: "${searchQuery}"`);
    }
  };

  const popularBooks = [
    { id: "1", title: "O Explorador das Estrelas", author: "Ana Silva", cover: book1, genre: "Ficção Científica" },
    { id: "2", title: "Corações Entrelaçados", author: "Carlos Mendes", cover: book2, genre: "Romance" },
    { id: "3", title: "O Reino Esquecido", author: "Marina Costa", cover: book3, genre: "Fantasia" },
    { id: "4", title: "Sombras do Passado", author: "João Santos", cover: book4, genre: "Mistério" },
    { id: "5", title: "Caminho para o Sucesso", author: "Paula Rodrigues", cover: book5, genre: "Biografia" },
  ];

  const categories = [
    { name: "Ficção Científica", icon: Rocket, color: "from-blue-500 to-purple-600" },
    { name: "Romance", icon: Heart, color: "from-pink-500 to-rose-600" },
    { name: "Biografias", icon: BookMarked, color: "from-amber-500 to-orange-600" },
    { name: "Fantasia", icon: Sparkles, color: "from-purple-500 to-indigo-600" },
    { name: "Mistério", icon: Lock, color: "from-gray-600 to-slate-800" },
    { name: "Não-Ficção", icon: Brain, color: "from-teal-500 to-cyan-600" },
    { name: "Clássicos", icon: BookHeart, color: "from-emerald-500 to-green-600" },
    { name: "Terror", icon: Ghost, color: "from-red-600 to-black" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-[hsl(var(--navy))]/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
            Descubra seu próximo
            <br />
            <span className="text-[hsl(var(--gold))]">livro favorito</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Explore milhares de histórias incríveis. Aventura, romance, mistério e muito mais te aguardam.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Busque por título, autor ou gênero..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-32 h-14 text-base rounded-full border-0 shadow-xl bg-white"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold-dark))] px-8 h-10 font-semibold shadow-gold"
              >
                Buscar
              </Button>
            </div>
          </form>
        </div>
      </section>

      <main className="flex-1">
        {/* Popular Books */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Populares da Semana
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {popularBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Navegue por Categorias
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={index}
                    to="/catalogo"
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl p-8 text-center transition-smooth hover-lift bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy-light))] text-white shadow-elegant">
                      <Icon className="h-12 w-12 mx-auto mb-4 transition-smooth group-hover:scale-110 text-[hsl(var(--gold))]" />
                      <h3 className="font-display font-semibold text-lg">{category.name}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-[hsl(var(--navy))] text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="relative">
              <span className="text-6xl md:text-8xl font-display text-[hsl(var(--gold))]/20 absolute -top-8 left-0">"</span>
              <blockquote className="font-display text-2xl md:text-3xl italic mb-6 relative z-10">
                Um leitor vive mil vidas antes de morrer… o homem que nunca leu vive apenas uma.
              </blockquote>
              <span className="text-6xl md:text-8xl font-display text-[hsl(var(--gold))]/20 absolute -bottom-8 right-0">"</span>
            </div>
            <cite className="text-[hsl(var(--gold))] font-medium text-lg not-italic">
              — George R.R. Martin
            </cite>
          </div>
        </section>

        {/* New Releases */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Novidades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {popularBooks.map((book) => (
                <BookCard key={`new-${book.id}`} {...book} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
