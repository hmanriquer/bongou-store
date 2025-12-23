import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-foreground font-serif text-5xl leading-tight text-balance italic md:text-6xl lg:text-7xl">
              Recién Horneado <br /> Hecho con Amor
            </h1>

            <div className="text-foreground/80 space-y-6">
              <p className="leading-relaxed">
                Bienvenido a Bongou Respostería — tu repostería donde nuestros
                productos son hechos con pasión, mantequilla croissants, y pan
                artesanal crean un toque de dulzura.
              </p>

              <p className="leading-relaxed">
                Ya sea que estés comenzando tu mañana o terminando tu tarde,
                nuestra repostería está aquí para traer alegría, cálido y un
                toque de dulzura.
              </p>
            </div>

            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background border-2 bg-transparent px-8 py-6 text-base"
              asChild
            >
              <Link href="/products">Ver Productos</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white p-4 shadow-lg">
              <Image
                src="/assorted-cookies-and-cakes-on-wooden-board.jpg"
                alt="Fresh baked cookies and cakes"
                width={500}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
