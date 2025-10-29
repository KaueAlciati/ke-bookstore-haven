import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, Plus, Minus, Sun, Moon, MoreVertical, BookmarkPlus } from "lucide-react";
import book1 from "@/assets/book1.jpg";
import { toast } from "sonner";

const BookReader = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(25);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const totalPages = 345;

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      toast.success(`Página ${currentPage + 1}`);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      toast.success(`Página ${currentPage - 1}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <Card className="p-6 shadow-elegant sticky top-24">
                <div className="space-y-6">
                  <div className="aspect-[2/3] overflow-hidden rounded-lg">
                    <img
                      src={book1}
                      alt="Capa do livro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h1 className="font-display text-2xl font-bold mb-2">
                      O Explorador das Estrelas
                    </h1>
                    <p className="text-muted-foreground">por J.K. Rowling</p>
                  </div>

                  <Button 
                    className="w-full bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold-dark))] shadow-gold font-semibold h-12"
                    onClick={() => toast.success("Iniciando leitura...")}
                  >
                    Iniciar Leitura
                  </Button>

                  <Separator />

                  <div>
                    <h3 className="font-display font-semibold text-lg mb-3">Sinopse</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Uma jornada épica através das estrelas, onde um jovem explorador 
                      descobre segredos ancestrais que podem mudar o destino da galáxia. 
                      Aventura, mistério e descobertas extraordinárias aguardam nesta 
                      história envolvente.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-display font-semibold text-lg mb-3">Detalhes</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Gênero:</span>
                        <span className="font-medium">Fantasia, Aventura</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Editora:</span>
                        <span className="font-medium">Edições Cosmos</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Publicação:</span>
                        <span className="font-medium">2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </aside>

            {/* Reading Area */}
            <div className="lg:col-span-8 xl:col-span-9">
              <Card className={`shadow-elegant overflow-hidden ${isDarkMode ? 'bg-[hsl(var(--navy))] text-white' : 'bg-white'}`}>
                <div className="p-8 md:p-12 min-h-[600px]">
                  <h2 className="font-display text-3xl font-bold mb-8">
                    Capítulo 1: O Mapa Antigo
                  </h2>
                  
                  <div 
                    className="prose prose-lg max-w-none leading-relaxed"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    <p className="mb-6">
                      A noite estava silenciosa quando Marcus descobriu o velho mapa escondido 
                      nos arquivos abandonados da biblioteca. As estrelas brilhavam através da 
                      janela empoeirada, como se também estivessem curiosas sobre o segredo que 
                      ele estava prestes a desvendar.
                    </p>
                    
                    <p className="mb-6">
                      O pergaminho era antigo, suas bordas amareladas pelo tempo. Símbolos 
                      estranhos dançavam pela superfície, formando constelações que ele nunca 
                      tinha visto em nenhum atlas estelar. Cada marca parecia pulsar com uma 
                      luz própria, como se o mapa estivesse vivo.
                    </p>
                    
                    <p className="mb-6">
                      "Isso não pode ser real", Marcus murmurou para si mesmo, traçando com os 
                      dedos as linhas que conectavam sistemas solares desconhecidos. Mas no 
                      fundo do seu coração, ele sabia que era. Este era o mapa que os exploradores 
                      antigos tinham procurado por séculos - o caminho para as Estrelas Perdidas.
                    </p>

                    <p className="mb-6">
                      Seus pensamentos foram interrompidos por um ruído no corredor. Alguém estava 
                      se aproximando. Rapidamente, Marcus guardou o mapa em sua mochila, seu coração 
                      batendo forte. Ele sabia que este era apenas o começo de uma jornada que mudaria 
                      sua vida para sempre.
                    </p>

                    <p className="mb-6">
                      Enquanto se preparava para sair, uma última olhada na janela revelou algo 
                      extraordinário: uma estrela cadente cruzava o céu noturno, seguindo exatamente 
                      a trajetória marcada no mapa. Era um sinal. A aventura estava chamando.
                    </p>
                  </div>
                </div>

                {/* Reading Toolbar */}
                <div className="border-t bg-muted/50 p-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <span className="text-sm font-medium px-4">
                        Página {currentPage} de {totalPages}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={decreaseFontSize}
                        title="Diminuir fonte"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-sm px-2">A</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={increaseFontSize}
                        title="Aumentar fonte"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      
                      <Separator orientation="vertical" className="h-6 mx-2" />
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        title="Alternar modo de leitura"
                      >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toast.success("Marcador adicionado!")}
                        title="Adicionar marcador"
                      >
                        <BookmarkPlus className="h-5 w-5" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        title="Mais opções"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookReader;
