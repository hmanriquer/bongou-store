import Image from 'next/image';

export default function LikeHomeSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-foreground mb-12 text-center font-serif text-4xl text-balance italic md:text-5xl">
          Por Qué Nuestra Panadería Se Siente Como En Casa
        </h2>

        <div className="mx-auto max-w-3xl space-y-8">
          {/* Card 1 */}
          <div className="border-foreground flex flex-col items-start gap-6 border-2 bg-white p-8 md:flex-row">
            <div className="md:w-1/3">
              <Image
                src="/preparing-cookie-dough-on-wooden-table.jpg"
                alt="Preparando masa de galletas"
                width={300}
                height={200}
                className="h-auto w-full"
              />
            </div>
            <div className="space-y-3 md:w-2/3">
              <h3 className="text-foreground font-serif text-2xl italic">
                Ingredientes caseros y honestos
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Sin atajos, sin conservantes. Solo mantequilla real, harina
                orgánica y sabores naturales — como debe ser la repostería.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-foreground border-2 bg-white p-8">
            <div className="space-y-3">
              <h3 className="text-foreground font-serif text-2xl italic">
                Esparciendo calidez en cada delicioso bocado
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                No solo horneamos — creamos recuerdos de alegría. Ya sea tu
                croissant favorito o un pastel artesanal para un día especial,
                cada artículo está hecho con amor, atención al detalle y una
                sonrisa del corazón. Porque cada rebanada debe sentirse como un
                cálido abrazo de la panadería de la abuela.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-foreground flex flex-col items-start gap-6 border-2 bg-white p-8 md:flex-row">
            <div className="md:w-1/3">
              <Image
                src="/hands-decorating-cake-with-frosting.jpg"
                alt="Decorando pastel"
                width={300}
                height={200}
                className="h-auto w-full"
              />
            </div>
            <div className="space-y-3 md:w-2/3">
              <h3 className="text-foreground font-serif text-2xl italic">
                Hecho a mano diariamente
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Cada mañana comienza con masa fresca, manos cuidadosas y amor
                por la repostería. Horneamos todo en pequeños lotes para
                asegurar frescura y calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
