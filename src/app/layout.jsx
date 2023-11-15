import Providers from "@/providers";
import { Roboto } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "HatBazar",
  description: "Hat Bazar is an e-commerce web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body className={roboto.variable}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
