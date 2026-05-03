import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1a1a1a] font-sans selection:bg-[#5D4E3E] selection:text-[#FAFAFA] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[#5D4E3E] hover:underline mb-8">
          &larr; Retour à l&apos;accueil
        </Link>
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-[#1a1a1a]">Mentions Légales</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">1. Éditeur de l&apos;application</h2>
            <p><strong>Nom de l&apos;entreprise :</strong> Le Jardin d&apos;Italie</p>
            <p><strong>Adresse :</strong> 8 Rue Gabriel Péri, 91300 Massy, France</p>
            <p><strong>Email :</strong> contact@jardin-italie.com</p>
            <p><strong>Téléphone :</strong> 01 69 20 29 54</p>
            <p><strong>Directeur de la publication :</strong> Alessandro Rossi</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <p><strong>Vercel Inc.</strong></p>
            <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p>https://vercel.com</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">3. Propriété Intellectuelle</h2>
            <p>L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
