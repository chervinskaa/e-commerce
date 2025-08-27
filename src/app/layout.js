import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "MyShop",
  description: "The best online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}        {/* Контент page.js */}
        <Footer />        {/* Footer глобально */}
      </body>
    </html>
  );
}
