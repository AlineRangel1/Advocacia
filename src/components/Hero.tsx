import { ArrowDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import lawyerProfile from '@/assets/lawyer-profile.png';
import logo from '@/assets/logo.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specialties = [
    'Direito Penal',
    'Direito de Família'
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-background pt-20">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-primary">
              <span className="text-accent">Aline Rangel</span><br />
              Advocacia Criminal e Família
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
              Defesa estratégica e humanizada com plantão criminal 24 horas
            </p>
            
            {/* Specialties Pills */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
                >
                  Plantão Criminal 24 Horas
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
                >
                  Atendimento Humanizado
                </Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={scrollToContact}
                className="text-lg group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Fale com um advogado
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg border-2"
              >
                Agende uma Consulta
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={logo} 
                alt="Advogada profissional especializada em defesa jurídica" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-accent" size={32} />
      </div>
    </section>
  );
};

export default Hero;
