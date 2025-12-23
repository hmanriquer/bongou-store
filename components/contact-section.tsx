import { MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-foreground mb-16 text-center font-serif text-4xl text-balance italic md:text-5xl">
          Contactemos en línea o en persona
        </h2>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-foreground mt-1 h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-foreground mb-2 font-semibold">
                  Visítanos
                </h3>
                <p className="text-foreground/80">
                  Ven y disfruta del aroma agradable de los deliciosos panes
                  recién horneados — ¡no podemos esperar a verte!
                </p>
                <p className="text-foreground mt-3 font-medium">
                  <span className="font-medium italic">Muy Pronto</span>
                </p>
                <div className="text-foreground/80 mt-4 space-y-1">
                  <p className="text-sm">📍 Horario de apertura:</p>
                  <p className="text-sm">
                    Lunes–Sábado:{' '}
                    <span className="font-medium italic">Muy Pronto</span>
                  </p>
                  <p className="text-sm">
                    Domingo:{' '}
                    <span className="font-medium italic">Muy Pronto</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="text-foreground mt-1 h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-foreground mb-2 font-semibold">
                  Contáctanos
                </h3>
                <p className="text-foreground/80">
                  Estamos aquí para ayudarte con cualquier cosa que
                  necesites—sólo contáctanos!
                </p>
                <div className="text-foreground mt-3 space-y-1">
                  <p className="text-sm">📞 Phone: +52(55) 6431 3022</p>
                  <p className="text-sm">📧 Email: bongoustore@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
