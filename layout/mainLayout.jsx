import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen px-4 bg-gray-100 dark:bg-gray-700 xl:px-20">
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
