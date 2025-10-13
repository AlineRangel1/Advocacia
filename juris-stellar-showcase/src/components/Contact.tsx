import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import LocationMap from './LocationMap';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada! Retornaremos em breve.');
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Precisa de Atendimento Urgente?<br />
            <span className="text-accent">Plantão 24 Horas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato agora e receba orientação jurídica especializada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border-2 border-border rounded-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background text-foreground transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background text-foreground transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background text-foreground transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background text-foreground resize-none transition-all"
                  placeholder="Descreva seu caso..."
                ></textarea>
              </div>
              
              <Button type="submit" variant="cta" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            {/* Location Map */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Localização</h3>
              <LocationMap />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-accent mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <a href="https://instagram.com/adv.alinerangel" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:text-accent/80 transition-colors">
                      @adv.alinerangel
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-accent mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a href="https://wa.me/555497052184" className="text-muted-foreground hover:text-accent transition-colors">
                      (54) 9705-2184
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-accent mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua Colômbia, 475<br />
                      Jardim América
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-accent mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h<br />
                      <span className="text-accent font-semibold">Plantão Criminal: 24 horas</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
