import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-primary/20 text-[180px] leading-none font-bold md:text-[240px]">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-foreground mb-6 font-serif text-4xl md:text-5xl">
          ¡Ups! Esta página se quemó
        </h2>

        {/* Description */}
        <p className="text-muted-foreground mx-auto mb-4 max-w-md text-lg leading-relaxed">
          Parece que esta página todavía está en el horno... o quizás se quemó
          un poco. Vamos a llevarte de vuelta a algo dulce!
        </p>

        {/* Cookie Image */}
        <div className="border-primary/20 relative mx-auto my-12 aspect-square w-full max-w-md overflow-hidden rounded-2xl border-4">
          <img
            src="/burnt-cookies-on-baking-sheet.jpg"
            alt="Burnt cookies illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button
              size="lg"
              className="w-full sm:w-auto"
            >
              Volver a la página principal
            </Button>
          </Link>
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent sm:w-auto"
            >
              Ver Productos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
