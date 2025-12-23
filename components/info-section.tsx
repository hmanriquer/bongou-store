import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-foreground mb-8 text-center font-serif text-4xl text-balance italic md:text-5xl">
          Donde la pasión se une a la pastelería
        </h2>

        <p className="text-foreground/80 mx-auto mb-12 max-w-3xl text-center leading-relaxed">
          En Bongou, cada creación comienza con una chispa de pasión y un
          profundo amor por el arte de la repostería. Desde las masas preparadas
          al amanecer hasta el hojaldre dorado y crujiente, ponemos esmero, alma
          y oficio en cada detalle. Ya sea un croissant de mantequilla, un pan
          artesanal o una tarta exquisita para tu gran día, creemos que cada
          bocado debe brindar alegría, calidez y un toque de magia a tu día. 🧡
        </p>

        <div className="relative mx-auto max-w-4xl">
          <Image
            src="/bakery-display-cakes-and-cookies.jpg"
            alt="Bakery display with cakes and cookies"
            width={900}
            height={400}
            className="h-auto w-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
