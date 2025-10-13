import { CheckCircle2, Award } from 'lucide-react';
import lawyerProfile from '@/assets/lawyer-profile.png';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              Sobre a <span className="text-accent">Advocacia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Atuação especializada em Direito Criminal e Direito de Família com atendimento humanizado 
              e plantão criminal 24 horas para emergências.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground leading-relaxed">
                Desenvolvemos uma <span className="text-accent font-semibold">estratégia específica</span> para cada cliente, com uma atuação combativa e técnica, buscando a melhor solução para a sua demanda.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa <span className="text-primary font-semibold">experiência na matéria</span> nos permite atuar com precisão e agilidade em todas as etapas do processo jurídico.
              </p>

              <div className="pt-6">
                <h4 className="text-xl font-bold mb-4 text-primary">Credenciais</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Bacharel em Direito pela FJP II (2020) e advogada inscrita na OAB/RS 126.198.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Atuação com foco na defesa em crimes contra a vida e na Lei de Drogas.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Ampla atuação em Direito de Família, conduzindo cada caso com sensibilidade, técnica e compromisso ético.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Conto com uma equipe especializada e estratégica, oferecendo atendimento diferenciado e personalizado.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Realizando atendimento e atuação em todo o território nacional.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={lawyerProfile} 
                  alt="Dra. Maria Silva - Advogada especializada" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Diferenciais Cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <Award className="text-accent mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2 text-primary">Atendimento Humanizado</h4>
              <p className="text-muted-foreground">
                Cada cliente é único e merece atenção personalizada e dedicada
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <Award className="text-accent mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2 text-primary">Experiência Comprovada</h4>
              <p className="text-muted-foreground">
                Centenas de casos bem-sucedidos em diversas áreas do direito
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <Award className="text-accent mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2 text-primary">Atualização Constante</h4>
              <p className="text-muted-foreground">
                Acompanhamento contínuo das mudanças legislativas e jurisprudenciais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
