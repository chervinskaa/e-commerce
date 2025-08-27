import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
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
        <Header />  
        <HeroSection />
        {children}     
        <Footer />      
      </body>
    </html>
  );
}
