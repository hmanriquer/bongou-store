import Footer from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Pastel de Chocolate de Capas',
    description:
      'Deléitate con la profunda riqueza de las aterciopeladas capas de chocolate, horneadas con amor a la perfección con el toque justo de dulzura para esa experiencia perfecta que se derrite en la boca.',
    price: '$38.00',
    image: '/chocolate-layer-cake-with-ganache.jpg'
  },
  {
    id: 2,
    name: 'Galletas de Azúcar',
    description:
      'Clásicas galletas de mantequilla y azúcar con un borde crujiente perfecto y un centro suave. Decoradas a mano con glaseado real para cualquier ocasión.',
    price: '$18.00',
    image: '/decorated-sugar-cookies.jpg'
  },
  {
    id: 3,
    name: 'Pastel Red Velvet',
    description:
      'Lujosas capas de red velvet con glaseado de queso crema. Una pieza central impresionante para cualquier celebración con su rico sabor a cacao.',
    price: '$42.00',
    image: '/red-velvet-cake-with-cream-cheese-frosting.jpg'
  },
  {
    id: 4,
    name: 'Galletas de Avena y Pasas',
    description:
      'Avena sustanciosa, pasas carnosas y canela tibia se combinan en estas galletas saludables. Masticables, satisfactorias y perfectas con café.',
    price: '$16.00',
    image: '/oatmeal-raisin-cookies.jpg'
  },
  {
    id: 5,
    name: 'Pastel de Fresas con Crema',
    description:
      'Capas ligeras de pastel de vainilla con crema batida fresca y fresas dulces. Un postre delicado y refrescante.',
    price: '$35.00',
    image: '/strawberry-shortcake-with-whipped-cream.jpg'
  },
  {
    id: 6,
    name: 'Galletas de Doble Chocolate',
    description:
      'Ricas galletas de chocolate cargadas con chispas de chocolate. Para el verdadero amante del chocolate que nunca tiene suficiente.',
    price: '$20.00',
    image: '/double-chocolate-cookies.jpg'
  },
  {
    id: 7,
    name: 'Pastel de Limón Glaseado',
    description:
      'Pastel de limón brillante y cítrico con un glaseado dulce. El equilibrio perfecto entre lo ácido y lo dulce en cada rebanada.',
    price: '$32.00',
    image: '/lemon-drizzle-cake-with-glaze.jpg'
  },
  {
    id: 8,
    name: 'Galletas Snickerdoodle',
    description:
      'Galletas suaves de canela y azúcar con un sabor característico. Enrolladas frescas diariamente y horneadas a la perfección.',
    price: '$17.00',
    image: '/snickerdoodle-cookies-with-cinnamon-sugar.jpg'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-foreground font-serif text-5xl text-balance italic md:text-6xl lg:text-7xl">
              Nuestra colección artesanal
            </h1>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Cada producto es horneado fresco diariamente con los ingredientes
              más finos y un montón de amor. Explora nuestra selección de panes
              artesanales, postres y dulces delicias.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group"
              >
                <div className="hover:border-foreground overflow-hidden border-2 border-transparent bg-white transition-all duration-300">
                  <div className="p-4">
                    <div className="relative mb-4 aspect-square overflow-hidden">
                      <Image
                        src={product.image || '/placeholder.svg'}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-3 p-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-foreground font-serif text-xl">
                          {product.name}
                        </h3>
                        <span className="text-foreground font-semibold whitespace-nowrap">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-foreground/70 line-clamp-3 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      <Button
                        className="bg-foreground text-background hover:bg-foreground/90 w-full"
                        size="sm"
                      >
                        Agregar al carrito
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="border-foreground mx-auto max-w-2xl space-y-6 border-2 bg-white p-12 text-center">
            <h2 className="text-foreground font-serif text-3xl text-balance italic md:text-4xl">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Ofrecemos pedidos personalizados para ocasiones especiales! Ya sea
              un pastel de cumpleaños, postre de bodas o evento corporativo, te
              encantaría crear algo especial para ti.
            </p>
            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background border-2 bg-transparent px-8 py-6"
              asChild
            >
              <Link href="/contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
