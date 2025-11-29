import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";   // เพิ่มบรรทัดนี้
import { ThemeToggle } from "@/components/ui/theme-toggle"; // ถ้าอยากใส่ใน layout เลยก็ได้

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SleekShop",
  description: "E-commerce by เอ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            <div className="absolute right-4 top-4">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}