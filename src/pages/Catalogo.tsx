import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";

const Catalogo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allBooks = [
    { id: "1", title: "O Explorador das Estrelas", author: "Ana Silva", cover: book1, genre: "Ficção Científica" },
    { id: "2", title: "Corações Entrelaçados", author: "Carlos Mendes", cover: book2, genre: "Romance" },
    { id: "3", title: "O Reino Esquecido", author: "Marina Costa", cover: book3, genre: "Fantasia" },
    { id: "4", title: "Sombras do Passado", author: "João Santos", cover: book4, genre: "Mistério" },
    { id: "5", title: "Caminho para o Sucesso", author: "Paula Rodrigues", cover: book5, genre: "Biografia" },
    { id: "6", title: "Viagem ao Desconhecido", author: "Ana Silva", cover: book1, genre: "Ficção Científica" },
    { id: "7", title: "Amor em Paris", author: "Carlos Mendes", cover: book2, genre: "Romance" },
    { id: "8", title: "A Espada Mágica", author: "Marina Costa", cover: book3, genre: "Fantasia" },
    { id: "9", title: "Crime na Mansão", author: "João Santos", cover: book4, genre: "Mistério" },
  ];

  const genres = ["Ficção Científica", "Romance", "Fantasia", "Mistério", "Biografia"];
  const authors = ["Ana Silva", "Carlos Mendes", "Marina Costa", "João Santos", "Paula Rodrigues"];

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
    const matchesAuthor = selectedAuthor === "all" || book.author === selectedAuthor;
    return matchesSearch && matchesGenre && matchesAuthor;
  });

  const totalPages = 10;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Explore nossa coleção
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Descubra milhares de títulos em diversos gêneros e autores
          </p>

          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Busque por título, autor ou gênero..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Gêneros</SelectItem>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Autor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Autores</SelectItem>
                  {authors.map((author) => (
                    <SelectItem key={author} value={author}>{author}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {pages.map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold-dark))]" : ""}
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
