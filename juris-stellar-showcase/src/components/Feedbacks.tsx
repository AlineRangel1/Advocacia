import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const Feedbacks = () => {
  const base = import.meta.env.BASE_URL || '/';
  const slides = [
    { src: `${base}IMG-20251012-WA0002.jpg`, alt: 'Feedback 1' },
    { src: `${base}IMG-20251012-WA0003.jpg`, alt: 'Feedback 2' },
    { src: `${base}IMG-20251012-WA0004.jpg`, alt: 'Feedback 3' },
    { src: `${base}IMG-20251012-WA0005.jpg`, alt: 'Feedback 4' },
    { src: `${base}IMG-20251012-WA0006.jpg`, alt: 'Feedback 5' },
    { src: `${base}IMG-20251012-WA0007.jpg`, alt: 'Feedback 6' },
    { src: `${base}IMG-20251012-WA0008.jpg`, alt: 'Feedback 7' },
    { src: `${base}IMG-20251012-WA0009.jpg`, alt: 'Feedback 8' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = `${base}placeholder.svg`;
  };

  return (
    <section id="feedbacks" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
            Feedbacks de <span className="text-accent">Clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os depoimentos em imagens; arraste para o lado ou use as setas.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {slides.map((s, idx) => (
                <div key={idx} className="min-w-0 flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_32%]">
                  <div className="relative bg-card border-2 border-border rounded-lg overflow-hidden">
                    <img
                      src={s.src}
                      alt={s.alt}
                      onError={handleError}
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:border-accent hover:text-accent transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
              Anterior
            </button>
            <button
              onClick={scrollNext}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:border-accent hover:text-accent transition-colors"
              aria-label="Próximo"
            >
              Próximo
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;