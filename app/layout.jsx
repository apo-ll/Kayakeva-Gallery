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
        className={`${urbanist.className} antialiased min-h-screen  mx-auto bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
