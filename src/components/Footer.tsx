import { Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Aline Rangel Advocacia" className="h-10 w-auto" />
              <h3 className="text-xl font-bold text-primary">Aline Rangel Advocacia</h3>
            </div>
            <p className="text-sm mb-4 text-muted-foreground">
              Especializada em Direito Penal e Família com atendimento humanizado e plantão 24 horas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('areas')}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Áreas de Atuação
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Redes Sociais</h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/adv.alinerangel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
                <span className="font-semibold">Siga no Instagram @adv.alinerangel</span>
              </a>
              <Button asChild variant="secondary" className="bg-accent/10 text-accent border border-accent/20">
                <a href="https://instagram.com/adv.alinerangel" target="_blank" rel="noopener noreferrer">
                  Ver perfil
                </a>
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={20} />
                <a 
                  href="https://wa.me/555497052184" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  (54) 9705-2184
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aline Rangel Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
