import "@/app/globals.css"
import { inter } from "@/app/fonts";
import Navbar from "@/app/ui/Components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}