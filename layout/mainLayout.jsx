import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen px-4 dark:bg-gray-800 xl:px-20">
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
