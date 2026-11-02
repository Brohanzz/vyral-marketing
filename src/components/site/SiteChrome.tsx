import Footer from "./Footer";
import Nav from "./Nav";

// Nav, main and footer around every page, including the 404 page, which renders
// outside the (site) route group.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="vy-ui flex flex-1 flex-col bg-base font-body text-ink">
      <a
        href="#main"
        className="sr-only rounded-md bg-surface px-4 py-3 font-semibold text-ink shadow-3 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[1001]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
