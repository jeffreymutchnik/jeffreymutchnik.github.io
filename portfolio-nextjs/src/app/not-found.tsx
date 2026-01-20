import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center py-20">
            <span className="text-display-lg text-[var(--color-crimson-500)] block mb-4">
              404
            </span>
            <h1 className="text-h1 mb-4">Page Not Found</h1>
            <p className="text-lead text-[var(--color-text-soft)] mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
