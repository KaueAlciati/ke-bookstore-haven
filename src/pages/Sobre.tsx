import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import readingCorner from "@/assets/reading-corner.jpg";

const Sobre = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    toast.success("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-[hsl(var(--navy))]">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--navy-light))] opacity-90" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Conectando Leitores e Histórias
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Conheça a nossa missão e entre em contato conosco
          </p>
        </div>
      </section>

      <main className="flex-1">
        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant-lg">
                  <img
                    src={readingCorner}
                    alt="Ambiente de leitura"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Sobre a Livraria do Ke
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fundada em 2024, a Livraria do Ke nasceu da paixão por conectar 
                    leitores com histórias extraordinárias. Acreditamos que cada livro 
                    é uma porta para novos mundos, novas perspectivas e infinitas 
                    possibilidades.
                  </p>
                  <p>
                    Nossa plataforma foi cuidadosamente desenvolvida para oferecer uma 
                    experiência de leitura digital incomparável. Com uma curadoria 
                    especial e milhares de títulos em diversos gêneros, tornamos a 
                    descoberta do próximo livro favorito uma jornada prazerosa.
                  </p>
                  <p>
                    Utilizamos tecnologia de ponta para garantir que sua experiência 
                    de leitura seja fluida, personalizada e acessível em qualquer 
                    dispositivo. Seja você um leitor ávido ou alguém que está 
                    redescobr indo o prazer da leitura, temos o livro perfeito esperando 
                    por você.
                  </p>
                  <p className="font-semibold text-foreground">
                    Nossa missão é simples: tornar a leitura acessível, prazerosa e 
                    inspiradora para todos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Fale Conosco
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="p-6 shadow-elegant">
                  <h3 className="font-display text-xl font-semibold mb-6">
                    Detalhes de Contato
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[hsl(var(--gold))]/10">
                        <Mail className="h-5 w-5 text-[hsl(var(--gold-dark))]" />
                      </div>
                      <div>
                        <p className="font-medium">E-mail</p>
                        <a 
                          href="mailto:contato@livriadoke.com" 
                          className="text-sm text-muted-foreground hover:text-[hsl(var(--gold-dark))] transition-smooth"
                        >
                          contato@livriadoke.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[hsl(var(--gold))]/10">
                        <Phone className="h-5 w-5 text-[hsl(var(--gold-dark))]" />
                      </div>
                      <div>
                        <p className="font-medium">Telefone</p>
                        <a 
                          href="tel:+5511999945210" 
                          className="text-sm text-muted-foreground hover:text-[hsl(var(--gold-dark))] transition-smooth"
                        >
                          +55 (11) 9999-4521
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[hsl(var(--gold))]/10">
                        <MapPin className="h-5 w-5 text-[hsl(var(--gold-dark))]" />
                      </div>
                      <div>
                        <p className="font-medium">Localização</p>
                        <p className="text-sm text-muted-foreground">
                          São Paulo, SP - Brasil
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-elegant">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Nos Encontre
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234015.96990648717!2d-46.87365474457193!3d-23.682074986392877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2sus!4v1709568403045!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Livraria do Ke"
                    />
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="p-8 shadow-elegant bg-[hsl(var(--navy))] text-white">
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Envie uma Mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Qual é o assunto?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Digite sua mensagem aqui..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 min-h-32"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold-dark))] shadow-gold font-semibold h-12"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Footer Section */}
        <section className="py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-[hsl(var(--gold-dark))] transition-smooth">
                Política de Privacidade
              </a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-[hsl(var(--gold-dark))] transition-smooth">
                Termos de Serviço
              </a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-[hsl(var(--gold-dark))] transition-smooth">
                Política de Cookies
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
