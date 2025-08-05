import Navbar from "./components/shared/navBar";
import Provider from "./components/ui/provider";
import Footer from "./components/shared/footer";
import "./globals.css";

export const metadata = {
  title: "Greenhouse Games | Learn Through Play",
  description: "A platform for educational games for educators and students alike!",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
