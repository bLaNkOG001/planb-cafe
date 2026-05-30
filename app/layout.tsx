import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan B Resto Cafe | Premium Dining Experience | Visakhapatnam",
  description: "Experience world-class gourmet burgers, artisanal pizzas, and signature dishes at Plan B Resto Cafe. Located in MVP Colony, Visakhapatnam. Live music, games, and unforgettable dining.",
  keywords: "Plan B Resto Cafe, Visakhapatnam restaurant, gourmet burgers, pizza, MVP Colony, live music cafe, best cafe Vizag",
  authors: [{ name: "Plan B Resto Cafe" }],
  openGraph: {
    title: "Plan B Resto Cafe | Where Flavor Meets Experience",
    description: "Premium dining experience in Visakhapatnam. Gourmet burgers, artisanal pizzas, live music & more.",
    type: "website",
    locale: "en_IN",
    url: "https://planbrestocafe.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
