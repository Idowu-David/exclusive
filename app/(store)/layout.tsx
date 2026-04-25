import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We use a flex column with min-h-screen to ensure the footer
    // is always pushed to the bottom of the page, even if there's little content.
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* The `children` represents your page.tsx content (Homepage, Product Page, etc.) */}
      <main className="flex-row">{children}</main>
      <Footer />
    </div>
  );
}
