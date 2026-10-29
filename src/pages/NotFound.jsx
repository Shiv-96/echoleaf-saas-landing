/**
 * NotFound
 * Content of the static 404 page. Explains that some links in this demo
 * intentionally lead nowhere and offers one clear way back home.
 */
import Logo from '../components/ui/Logo.jsx';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="container-page flex h-16 items-center justify-between">
        <Logo href="/" />
        <ThemeToggle />
      </header>

      <main id="main" className="container-page flex flex-1 flex-col items-center justify-center py-20 text-center">
        <p className="text-gradient font-display text-7xl font-extrabold sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">This page does not exist</h1>
        <p className="mt-4 max-w-md text-lg text-ink-muted">
          Echoleaf is a sample website, so some links lead here on purpose. Everything worth seeing lives on the home
          page.
        </p>
        <a href="/" className="btn btn-primary mt-8 px-6 py-3.5">
          Back to home
        </a>
      </main>

      <footer className="container-page py-6 text-center text-sm text-ink-muted">
        Sample website for demonstration purposes.
      </footer>
    </div>
  );
}
