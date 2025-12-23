import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-8 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">© 2025 BonGou. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/terms"
              className="transition-colors hover:text-white/80"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white/80"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
