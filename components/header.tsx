import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-foreground text-xl font-bold tracking-wider"
          >
            BONGOU
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              INICIO
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              SOBRE NOSOTROS
            </Link>
            <Link
              href="/menu"
              className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              MENU
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              PRODUCTOS
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              CONTACTO
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-foreground/80"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrito de compras</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-foreground/80"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta de usuario</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
