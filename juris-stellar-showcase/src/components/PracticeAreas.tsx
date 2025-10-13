import { Scale, Briefcase, Users, Home, ShoppingCart, Building2 } from 'lucide-react';

const PracticeAreas = () => {
  const areas = [
    {
      icon: Scale,
      title: 'Direito Penal',
      description: 'Defesa penal completa com plantão 24 horas. Atuação em inquéritos policiais, júri, recursos e habeas corpus. Assistência imediata em prisões em flagrante e situações de emergência.',
      highlight: true
    },
    {
      icon: Users,
      title: 'Direito de Família',
      description: 'Atendimento humanizado e estratégico em divórcio, pensão alimentícia, guarda de filhos, partilha de bens, união estável e todas as questões familiares com sensibilidade e profissionalismo.',
      highlight: true
    }
  ];

  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Áreas de <span className="text-accent">Atuação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa experiência na matéria nos permite atuar com precisão e agilidade em todas as etapas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="group bg-card border-2 border-border rounded-lg p-8 hover:border-accent hover:bg-card/80 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <area.icon className="text-accent group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
