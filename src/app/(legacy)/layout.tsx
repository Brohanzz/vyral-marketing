import "./legacy.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Pages not yet redesigned keep the old nav, footer and global styles.
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="legacy-root flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
