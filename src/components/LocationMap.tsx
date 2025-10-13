import { MapPin } from 'lucide-react';

const LocationMap = () => {

  return (
    <div className="space-y-4">
      <div className="w-full h-[400px] rounded-lg border-2 border-border overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.0385309555584!2d-52.19968232374689!3d-28.449399982486868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2a6b2b8a8b8a7%3A0x3c35d1a9d5c5b9a!2sR.%20Col%C3%B4mbia%2C%20475%20-%20Jardim%20Am%C3%A9rica%2C%20Marau%20-%20RS%2C%2099150-000!5e0!3m2!1spt-BR!2sbr!4v1698765432109!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-start gap-3">
          <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="font-semibold text-foreground">Rua Colômbia, 475</p>
            <p className="text-sm text-muted-foreground">Jardim América, Marau - RS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
