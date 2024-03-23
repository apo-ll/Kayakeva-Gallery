import { Urbanist } from "next/font/google";
import "@/styles/globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Kaykeva Gallery",
  description: "Home Decor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.className} antialiased min-h-screen  mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8`}
      >
        {children}
      </body>
    </html>
  );
}
