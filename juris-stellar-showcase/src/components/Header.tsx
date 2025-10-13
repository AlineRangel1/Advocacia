import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Aline Rangel Advocacia" className="h-12 md:h-14" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contato
            </button>
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection('contato')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 py-6">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-accent transition-colors font-medium text-left px-4"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-accent transition-colors font-medium text-left px-4"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="text-foreground hover:text-accent transition-colors font-medium text-left px-4"
              >
                Áreas de Atuação
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-accent transition-colors font-medium text-left px-4"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection('contato')}
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
