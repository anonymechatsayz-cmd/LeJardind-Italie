import Link from 'next/link';

export default function CGV() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1a1a1a] font-sans selection:bg-[#5D4E3E] selection:text-[#FAFAFA] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[#5D4E3E] hover:underline mb-8">
          &larr; Retour à l&apos;accueil
        </Link>
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-[#1a1a1a]">Conditions Générales de Vente</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">1. Réservations en ligne</h2>
            <p>La réservation en ligne est un service gratuit. Toute annulation doit nous parvenir au moins 24 heures à l&apos;avance afin de garantir un service de qualité à l&apos;ensemble de nos clients.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">2. Tarifs et Paiement</h2>
            <p>Les prix indiqués sur notre menu en ligne sont en euros (€) et incluent la TVA applicable. Le restaurant se réserve le droit de modifier ses prix à tout moment. Le règlement s&apos;effectue sur place (Espèces, Carte Bancaire, Tickets Restaurant).</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">3. Mineurs et Alcool</h2>
            <p>Conformément à l&apos;article L. 3342-1 du Code de la santé publique, la vente d&apos;alcool à des mineurs est interdite. La consommation d&apos;alcool sur place nécessite d&apos;avoir 18 ans révolus.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
