import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Que delícia, cara",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
