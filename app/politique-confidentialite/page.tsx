import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1a1a1a] font-sans selection:bg-[#5D4E3E] selection:text-[#FAFAFA] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[#5D4E3E] hover:underline mb-8">
          &larr; Retour à l&apos;accueil
        </Link>
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-[#1a1a1a]">Politique de Confidentialité</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">1. Collecte des données personnelles</h2>
            <p>Lorsque vous utilisez notre formulaire de réservation, nous collectons les données suivantes : Nom, Prénom, Numéro de téléphone. Ces données sont strictement nécessaires au traitement de votre demande de réservation et ne seront pas utilisées à d&apos;autres fins commerciales sans votre accord.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">2. Durée de conservation</h2>
            <p>Conformément au RGPD, vos données personnelles sont conservées uniquement pour la durée nécessaire au traitement de la réservation (maximum 1 mois après la date de votre visite prévue). Elles sont ensuite purgées de nos systèmes.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">3. Vos Droits</h2>
            <p>Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, et de portabilité de vos données. Vous pouvez exercer ce droit en nous contactant à l&apos;adresse suivante : contact@jardin-italie.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
