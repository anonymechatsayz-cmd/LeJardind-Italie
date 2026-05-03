import type {Metadata} from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  title: "Le Jardin d'Italie | Restaurant Italien à Massy",
  description: "Découvrez l'authenticité italienne au cœur de Massy. Dîner sur place, vente à emporter et livraison.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased text-[#1a1a1a] bg-[#fafafa]" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only">Aller au contenu principal</a>
        {children}
      </body>
    </html>
  );
}
