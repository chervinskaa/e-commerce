import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  title: "Exclusive",
  description: "The best online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <WishlistProvider>
          <Header />
          {children}
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
