'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, ChevronRight, ArrowUpRight, Instagram, Linkedin, 
  Star, Phone, MapPin, Calendar, Users, Facebook, Clock 
} from 'lucide-react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Entrées');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for reservation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };


  const menuData: Record<string, { image: string; alt: string; items: { name: string; price: string; desc: string }[] }> = {
    'Entrées': {
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=75&fm=webp",
      alt: "Délicieuse Bruschetta à la tomate fraîche",
      items: [
        { name: 'Bruschetta al Pomodoro', price: '12.00€', desc: 'Pain de campagne grillé, tomates cerises confites, ail, basilic frais' },
        { name: 'Salade Caprese', price: '14.00€', desc: 'Véritable mozzarella di Bufala, tomates anciennes, basilic frais' },
        { name: 'Arancini di Riso', price: '16.00€', desc: 'Croquettes de risotto au ragoût de viande et cœur de mozzarella' },
        { name: 'Prosciutto e Melone', price: '18.00€', desc: 'Fines tranches de jambon de Parme affiné 24 mois, melon' },
        { name: 'Burrata aux Poivrons Rôtis', price: '20.00€', desc: 'Burrata crémeuse des Pouilles, poivrons marinés à l\'huile' },
      ]
    },
    'Plats': {
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&q=75&fm=webp",
      alt: "Plat de pâtes italiennes",
      items: [
        { name: 'Linguine alle Vongole', price: '26.00€', desc: 'Pâtes fraîches, palourdes, ail, piment, persil, vin blanc' },
        { name: 'Osso Buco alla Milanese', price: '32.00€', desc: 'Jarret de veau braisé, gremolata, risotto au safran' },
        { name: 'Filet de Bar Rôti', price: '29.00€', desc: 'Bar, légumes de saison croquants, sauce vierge' },
        { name: 'Ravioli à la Truffe', price: '28.00€', desc: 'Ravioli faits maison farcis à la ricotta, crème de truffe noire' },
        { name: 'Tagliata di Manzo', price: '34.00€', desc: 'Faux-filet de bœuf émincé, roquette, parmesan, vinaigre balsamique' },
      ]
    },
    'Desserts': {
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=75&fm=webp",
      alt: "Tiramisu maison",
      items: [
        { name: 'Tiramisu Classico', price: '11.00€', desc: 'Savoiardi, mascarpone, espresso, cacao' },
        { name: 'Panna Cotta', price: '10.00€', desc: 'Panna Cotta à la vanille de Madagascar, coulis de fruits rouges' },
        { name: 'Cannoli Siciliani', price: '12.00€', desc: 'Pâte croustillante farcie de crème de ricotta sucrée, éclats de pistache' },
        { name: 'Gelato Artigianale', price: '9.00€', desc: 'Sélection de glaces artisanales italiennes (3 boules)' },
        { name: 'Torta Caprese', price: '13.00€', desc: 'Gâteau moelleux au chocolat et aux amandes' },
      ]
    },
    'Vins': {
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=75&fm=webp",
      alt: "Verres de vin rouge",
      items: [
        { name: 'Chianti Classico Riserva', price: '45.00€', desc: 'Toscane - Notes de cerise noire, de cuir et d\'épices' },
        { name: 'Barolo DOCG', price: '75.00€', desc: 'Piémont - Corsé et élégant, arômes de rose et de réglisse' },
        { name: 'Amarone della Valpolicella', price: '85.00€', desc: 'Vénétie - Riche, velouté, notes de fruits secs et de chocolat' },
        { name: 'Pinot Grigio', price: '35.00€', desc: 'Frioul - Vif et rafraîchissant, arômes de pomme et d\'agrumes' },
        { name: 'Prosecco Superiore DOCG', price: '40.00€', desc: 'Vénétie - Fines bulles, notes de pêche et de fleurs blanches' },
      ]
    },
    'Menu Spécial': {
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=75&fm=webp",
      alt: "Table de restaurant étoilé",
      items: [
        { name: 'Menu Dégustation (5 plats)', price: '85.00€', desc: 'Un voyage à travers les régions d\'Italie, créé par notre chef' },
        { name: 'Accord Mets & Vins', price: '45.00€', desc: 'Sélection de 4 verres de vin pour accompagner votre menu dégustation' },
        { name: 'Menu Truffe (En saison)', price: '110.00€', desc: 'Entrée, plat et dessert autour de la truffe noire fraîche' },
        { name: 'Menu Végétarien', price: '65.00€', desc: 'Menu complet 4 services mettant en valeur les légumes de saison' },
      ]
    }
  };

  const menuTabs = Object.keys(menuData);
  const currentMenuInfo = menuData[activeTab];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only bg-[#5D4E3E] text-[#FAFAFA] p-4 absolute top-0 left-0 z-[100] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C89B53]">
        Aller au contenu principal
      </a>

      <div className="min-h-screen bg-[#FAFAFA] text-[#1a1a1a] font-sans selection:bg-[#5D4E3E] selection:text-[#FAFAFA] overflow-x-hidden flex flex-col">
        
        {/* HEADER */}
        <header className="w-full z-50 flex flex-col bg-[#FAFAFA] border-b border-gray-200">
          {/* Top bar */}
          <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-12 h-14 md:h-16 border-b border-gray-100 max-w-[1920px] mx-auto w-full">
            {/* Left icons */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-[#1a1a1a]/70 z-10 md:w-[100px]">
              <a href="#" className="hover:text-[#5D4E3E] transition-colors duration-300 hidden sm:block" aria-label="Notre adresse">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="tel:0169202954" className="hover:text-[#5D4E3E] transition-colors duration-300" aria-label="Nous appeler">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="hover:text-[#5D4E3E] transition-colors duration-300 hidden sm:block" aria-label="Suivez-nous sur Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center text-[#1a1a1a] w-max max-w-[50%]">
              <span className="text-lg sm:text-xl md:text-2xl font-serif font-medium tracking-tight truncate">Le Jardin d&apos;Italie</span>
            </div>

            {/* Right language */}
            <div className="flex items-center space-x-1 text-sm font-medium cursor-pointer hover:text-[#5D4E3E] transition-colors duration-300 z-10 w-auto md:w-[100px] justify-end justify-self-end">
              <span>FR</span>
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </div>

          {/* Nav bar */}
          <div className="flex items-center justify-center h-12 md:h-16 max-w-[1920px] mx-auto w-full overflow-x-auto scrollbar-hide px-4">
            <nav className="flex space-x-5 sm:space-x-8 md:space-x-12 text-sm md:text-base font-medium text-[#1a1a1a]/80 tracking-wide whitespace-nowrap">
              <Link href="#about" className="hover:text-[#5D4E3E] transition-colors duration-300">À propos</Link>
              <Link href="#menu" className="hover:text-[#5D4E3E] transition-colors duration-300">Menu</Link>
              <Link href="#chef" className="hidden sm:inline-block hover:text-[#5D4E3E] transition-colors duration-300">Chef</Link>
              <Link href="#reservations" className="hover:text-[#5D4E3E] transition-colors duration-300">Réservations</Link>
            </nav>
          </div>
        </header>

        <main id="main-content" className="flex-1">
          
          {/* HERO */}
          <section className="relative h-[calc(100svh-104px)] md:h-[85vh] min-h-[400px] md:min-h-[500px] w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1920&q=75&fm=webp" 
              alt="Plats italiens authentiques servis au Jardin d'Italie" 
              fill
              className="object-cover opacity-50"
              priority
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-8 md:pb-0">
              <h1 className="text-5xl md:text-[80px] lg:text-[100px] leading-tight font-serif tracking-tight text-[#FAFAFA] text-center max-w-5xl px-4 drop-shadow-md">
                Bienvenue au Jardin
              </h1>

              {/* Bottom Logos & Dots */}
              <div className="absolute bottom-6 md:bottom-12 w-full flex flex-col items-center px-2 sm:px-4">
                <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-6 md:space-x-12 opacity-95 w-full">
                  <div className="text-[#FAFAFA] font-sans font-bold text-[8px] sm:text-xs md:text-sm tracking-widest text-center uppercase leading-tight">
                    Tradition<br/>Italienne
                  </div>
                  <div className="h-6 sm:h-8 w-[1px] bg-[#FAFAFA]/30"></div>
                  <div className="text-[#FAFAFA] font-sans font-bold text-[8px] sm:text-xs md:text-sm tracking-widest text-center uppercase leading-tight">
                    Fait<br/>Maison
                  </div>
                  <div className="h-6 sm:h-8 w-[1px] bg-[#FAFAFA]/30"></div>
                  <div className="text-[#FAFAFA] font-serif tracking-wide flex flex-col items-center leading-none">
                    <span className="flex items-center text-[11px] sm:text-base md:text-lg">Avis Google<span className="text-[10px] sm:text-sm text-[#C89B53] ml-1 flex">★★★★<span className="text-[8px] sm:text-xs mt-[1px] sm:mt-[2px]">★</span></span></span>
                    <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] mt-1.5 font-sans">4.2/5 · 439 votes</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MENU SECTION */}
          <section id="menu" className="py-12 md:py-20 bg-[#FAFAFA]">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
              <h2 className="text-3xl md:text-[40px] leading-tight font-serif text-center max-w-[65ch] mx-auto mb-12 text-[#1a1a1a]">
                Notre menu est une sélection minutieuse de chefs-d&apos;œuvre italiens.
              </h2>

              {/* Tabs */}
              <div className="sticky top-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-sm pt-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 flex justify-center flex-wrap gap-4 mb-8 sm:mb-16 border-b border-gray-100 sm:border-none shadow-sm sm:shadow-none" role="tablist">
                {menuTabs.map((tab) => (
                  <button 
                    key={tab}
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => {
                      setActiveTab(tab)
                      // Optionally scroll to menu top if needed
                      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`px-6 py-3 text-sm font-medium border transition-colors duration-300 min-h-[48px] ${
                      activeTab === tab 
                        ? 'bg-[#5D4E3E] text-[#FAFAFA] border-[#5D4E3E]' 
                        : 'border-gray-200 text-[#1a1a1a] bg-white sm:bg-transparent hover:border-[#5D4E3E]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start lg:items-center min-h-[500px]">
                {/* List Menu */}
                <div className="flex flex-col w-full order-2 lg:order-1">
                  {currentMenuInfo.items.map((item, i) => (
                    <div key={item.name} className={`flex flex-col py-5 sm:py-6 border-b border-gray-200 ${i === 0 ? 'border-t-0' : ''}`}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 sm:gap-4 mb-2">
                        <h3 className={`text-base sm:text-lg md:text-xl font-medium leading-tight text-[#1a1a1a] transition-colors ${i === 0 ? 'underline underline-offset-[8px] decoration-1 decoration-[#5D4E3E]/30' : 'hover:text-[#5D4E3E]'}`}>
                          {item.name}
                        </h3>
                        <span className="text-base sm:text-lg font-serif tracking-wide text-[#5D4E3E] self-start sm:self-auto shrink-0">{item.price}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 max-w-full sm:max-w-[85%] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Img */}
                <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-square w-full order-1 lg:order-2 rounded-sm overflow-hidden">
                  <Image 
                    src={currentMenuInfo.image} 
                    alt={currentMenuInfo.alt} 
                    fill
                    className="object-cover shadow-sm transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT / CHEF */}
          <section id="chef" className="flex flex-col lg:flex-row bg-[#FAFAFA] border-t border-gray-100">
            {/* Left Image Component */}
            <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-[720px] bg-[#1a1a1a]">
              <Image 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000&q=75&fm=webp" 
                alt="Chef Alessandro Rossi préparant un plat"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E3E]/90 via-[#5D4E3E]/40 to-transparent"></div>
              
              <div className="absolute bottom-12 left-6 right-6 md:left-16 md:right-16">
                <div className="flex space-x-2 mb-6">
                  <div className="w-1.5 h-6 bg-[#FAFAFA] skew-x-[-15deg]"></div>
                  <div className="w-1.5 h-6 bg-[#FAFAFA] skew-x-[-15deg]"></div>
                </div>
                <p className="text-[#FAFAFA] text-2xl md:text-3xl font-serif leading-tight max-w-[65ch]">
                  Cuisiner, c&apos;est façonner une expérience. Au Jardin, nous honorons la tradition en utilisant les meilleurs ingrédients pour raconter une histoire dans chaque assiette.
                </p>
              </div>
            </div>

            {/* Right Text Component */}
            <div className="lg:w-1/2 p-12 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center">
              <div className="flex items-center space-x-3 text-xs md:text-sm font-bold tracking-widest uppercase text-[#C89B53] mb-8">
                <Star className="w-4 h-4 fill-current" />
                <span>Cuisiné par les meilleurs</span>
                <Star className="w-4 h-4 fill-current" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#1a1a1a]">Rencontrez Alessandro Rossi</h2>
              
              <p className="text-gray-600 text-base leading-relaxed max-w-[65ch] mb-12">
                Notre chef, l&apos;esprit culinaire du Jardin d&apos;Italie, possède une riche histoire ancrée dans les traditions de la cuisine de son pays. Né dans la pittoresque région de Toscane, son voyage culinaire a commencé dans les cuisines rustiques de la trattoria familiale, où il a appris l&apos;art de cuisiner avec sa grand-mère. Sa passion pour les ingrédients frais et locaux a posé les bases de son dévouement.
              </p>

              <Link href="#reservations" className="inline-flex items-center justify-center min-h-[48px] px-8 border border-gray-300 text-sm font-medium hover:bg-[#5D4E3E] hover:text-[#FAFAFA] hover:border-[#5D4E3E] transition-colors bg-[#FAFAFA] text-[#1a1a1a] mb-16">
                En savoir plus
              </Link>

              <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-lg mt-auto">
                <div className="bg-white p-6 md:p-8 flex flex-col items-center justify-center border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
                  <span className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-[#5D4E3E]">15+</span>
                  <span className="text-xs md:text-sm text-gray-500 font-medium">Années d&apos;Expérience</span>
                </div>
                <div className="bg-white p-6 md:p-8 flex flex-col items-center justify-center border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
                  <span className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-[#5D4E3E]">10k+</span>
                  <span className="text-xs md:text-sm text-gray-500 font-medium text-center">Clients satisfaits</span>
                </div>
              </div>
            </div>
          </section>

          {/* SIGNATURE DISHES */}
          <section className="py-12 md:py-20 bg-[#5D4E3E] text-[#FAFAFA]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
              <div className="mb-12 md:mb-16">
                <h2 className="text-4xl md:text-[48px] leading-tight font-serif mb-4">
                  Nos Plats Signatures
                </h2>
                <p className="text-[#FAFAFA]/80 text-base max-w-[65ch] leading-relaxed">
                  Découvrez le summum de la gastronomie italienne avec nos plats signatures incontournables, élaborés à partir de produits frais.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                {/* Dish 1 */}
                <article className="flex flex-col group cursor-pointer">
                  <div className="relative aspect-square md:aspect-[4/5] mb-6 overflow-hidden bg-[#3A2F23]">
                    <Image 
                      src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=75&fm=webp" 
                      alt="Risotto à la truffe parfumé"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="flex justify-between items-end border-b border-[#FAFAFA]/20 pb-4">
                    <h3 className="text-xl font-medium tracking-wide mb-1">Risotto à la Truffe</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-serif">24.00€</span>
                      <button className="flex-shrink-0 w-10 h-10 border border-[#FAFAFA]/30 flex items-center justify-center group-hover:bg-[#FAFAFA] group-hover:text-[#5D4E3E] transition-colors" aria-label="Commander le risotto">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>

                {/* Dish 2 */}
                <article className="flex flex-col group cursor-pointer md:mt-12">
                  <div className="relative aspect-square md:aspect-[4/5] mb-6 overflow-hidden bg-[#3A2F23]">
                    <Image 
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=75&fm=webp" 
                      alt="Osso buco authentique mijoté lentement"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="flex justify-between items-end border-b border-[#FAFAFA]/20 pb-4">
                    <h3 className="text-xl font-medium tracking-wide mb-1">Osso Buco Mijoté</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-serif">28.00€</span>
                      <button className="flex-shrink-0 w-10 h-10 border border-[#FAFAFA]/30 flex items-center justify-center group-hover:bg-[#FAFAFA] group-hover:text-[#5D4E3E] transition-colors" aria-label="Commander l'Osso Buco">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>

                {/* Dish 3 */}
                <article className="flex flex-col group cursor-pointer">
                  <div className="relative aspect-square md:aspect-[4/5] mb-6 overflow-hidden bg-[#3A2F23]">
                    <Image 
                      src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=75&fm=webp" 
                      alt="Tiramisu classique au café espresso"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="flex justify-between items-end border-b border-[#FAFAFA]/20 pb-4">
                    <h3 className="text-xl font-medium tracking-wide mb-1">Tiramisu Classico</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-serif">9.00€</span>
                      <button className="flex-shrink-0 w-10 h-10 border border-[#FAFAFA]/30 flex items-center justify-center group-hover:bg-[#FAFAFA] group-hover:text-[#5D4E3E] transition-colors" aria-label="Commander le tiramisu">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* AWARDS */}
          <section className="py-12 md:py-20 bg-[#FAFAFA]">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6 text-center text-[#1a1a1a]">
                Preuves de Qualité
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-[65ch] mx-auto mb-12 text-base text-center">
                Le Jardin d&apos;Italie est fier d&apos;être unanimement reconnu par sa clientèle locale. Ces témoignages et notes reflètent notre engagement envers l&apos;excellence culinaire à Massy.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { title: "Google", desc: "4.2/5", extra: "439 Avis", bgColor: "bg-white", textColor: "text-blue-600" },
                  { title: "Tripadvisor", desc: "Excellence", extra: "Attestation", bgColor: "bg-[#34e0a1]", textColor: "text-[#1a1a1a]" },
                  { title: "Uber Eats", desc: "Top Établissement", extra: "Qualité", bgColor: "bg-black", textColor: "text-[#FAFAFA]" },
                  { title: "The Fork", desc: "9.1/10", extra: "Note Usagers", bgColor: "bg-[#8CA278]", textColor: "text-[#FAFAFA]" }
                ].map((item, idx) => (
                  <div key={idx} className={`aspect-[4/3] flex flex-col items-center justify-center p-6 shadow-[0_8px_40px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:-translate-y-1 ${item.bgColor}`}>
                    <span className={`font-serif font-bold text-xl md:text-2xl mb-2 text-center tracking-tight leading-tight ${item.textColor}`}>
                      {item.title}
                    </span>
                    <span className={`text-sm font-semibold text-center mt-1 leading-tight ${item.textColor === 'text-[#FAFAFA]' ? 'text-[#FAFAFA]/90' : 'text-[#1a1a1a]'}`}>
                      {item.desc}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-widest mt-3 ${item.textColor === 'text-[#FAFAFA]' ? 'text-[#FAFAFA]/70' : 'text-gray-500'}`}>
                      {item.extra}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RESERVATIONS & FOOTER */}
          <footer id="contact" className="relative bg-[#FAFAFA]">
            {/* Top Footer Background area */}
            <div className="bg-[#5D4E3E] text-[#FAFAFA] pt-16 md:pt-24 pb-40 px-6 md:px-8">
              <div className="max-w-[1400px] mx-auto relative flex flex-col lg:flex-row justify-between">
                
                {/* Left Content */}
                <div className="lg:w-1/2 lg:pr-16 z-10">
                  <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-12 max-w-[15ch]">
                    Réservez votre table parmi nous.
                  </h2>
                  
                  <address className="not-italic mb-12 space-y-2 text-sm md:text-base text-[#FAFAFA]/90">
                    <p className="flex items-center space-x-3"><MapPin className="w-5 h-5 text-[#C89B53]" /> <span>8 Rue Gabriel Péri, 91300 Massy</span></p>
                    <p className="flex items-center space-x-3"><Phone className="w-5 h-5 text-[#C89B53]" /> <span>01 69 20 29 54</span></p>
                  </address>

                  <div>
                    <h3 className="text-xl font-medium mb-6 flex items-center space-x-2 text-[#C89B53]">
                      <Clock className="w-5 h-5" /> <span>Heures d&apos;ouverture</span>
                    </h3>
                    <ul className="space-y-4 text-base max-w-sm">
                      <li className="flex justify-between border-b border-[#FAFAFA]/10 pb-2">
                        <span className="text-[#FAFAFA]/80">Mar - Ven</span>
                        <span className="text-right">12:00 - 14:30<br/>19:00 - 22:30</span>
                      </li>
                      <li className="flex justify-between border-b border-[#FAFAFA]/10 pb-2">
                        <span className="text-[#FAFAFA]/80">Sam - Dim</span>
                        <span className="text-right">12:00 - 15:00<br/>19:00 - 23:00</span>
                      </li>
                      <li className="flex justify-between pb-2">
                        <span className="text-[#FAFAFA]/80">Lundi</span>
                        <span>Fermé</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Form Card */}
                <div id="reservations" className="lg:absolute right-0 top-0 bg-[#FAFAFA] text-[#1a1a1a] p-8 md:p-12 w-full lg:w-[500px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] mt-12 lg:mt-0 z-20 border border-gray-100">
                  <h3 className="text-2xl font-serif mb-6 text-[#1a1a1a] flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#5D4E3E]" /> <span>Réservation en ligne</span>
                  </h3>
                  
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[300px] space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h4 className="text-xl font-serif font-medium text-[#1a1a1a]">Demande envoyée !</h4>
                      <p className="text-gray-600 text-sm">Nous vous contacterons très prochainement pour confirmer votre réservation.</p>
                      <button onClick={() => setIsSubmitted(false)} className="mt-4 text-sm font-medium text-[#5D4E3E] hover:underline underline-offset-4">Faire une autre demande</button>
                    </div>
                  ) : (
                    <form onSubmit={handleReservation} className="space-y-5" aria-label="Formulaire de réservation">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Votre Nom</label>
                        <input id="name" name="name" type="text" placeholder="ex. Jean Dupont" className="w-full min-h-[48px] border border-gray-200 px-4 focus:ring-2 focus:ring-[#C89B53] focus:border-[#C89B53] outline-none transition-all placeholder:text-gray-400 bg-white text-base disabled:opacity-50" required disabled={isSubmitting} />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Numéro de téléphone</label>
                        <input id="phone" name="phone" type="tel" placeholder="06 12 34 56 78" className="w-full min-h-[48px] border border-gray-200 px-4 focus:ring-2 focus:ring-[#C89B53] focus:border-[#C89B53] outline-none transition-all placeholder:text-gray-400 bg-white text-base disabled:opacity-50" required disabled={isSubmitting} />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm text-gray-600 mb-2 font-medium">Date</label>
                          <input id="date" name="date" type="date" className="w-full min-h-[48px] border border-gray-200 px-4 focus:ring-2 focus:ring-[#C89B53] focus:border-[#C89B53] outline-none transition-all text-[#1a1a1a] bg-white text-sm disabled:opacity-50" required disabled={isSubmitting} />
                        </div>
                        <div>
                          <label htmlFor="guests" className="block text-sm text-gray-600 mb-2 font-medium flex items-center space-x-1">
                            <Users className="w-3.5 h-3.5" /> <span>Personnes</span>
                          </label>
                          <select id="guests" name="guests" defaultValue="2" className="w-full min-h-[48px] border border-gray-200 px-4 focus:ring-2 focus:ring-[#C89B53] focus:border-[#C89B53] outline-none transition-all text-[#1a1a1a] bg-white text-sm disabled:opacity-50" disabled={isSubmitting}>
                            <option value="1">1 Personne</option>
                            <option value="2">2 Personnes</option>
                            <option value="3">3 Personnes</option>
                            <option value="4">4 Personnes</option>
                            <option value="5+">5+ Personnes</option>
                          </select>
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="flex items-center justify-center w-full min-h-[48px] h-12 bg-[#1a1a1a] text-[#FAFAFA] font-medium hover:bg-[#5D4E3E] disabled:bg-gray-400 transition-colors mt-6 text-base focus:ring-2 focus:ring-offset-2 focus:ring-[#1a1a1a]">
                        {isSubmitting ? (
                          <span className="flex items-center space-x-2">
                            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                          </span>
                        ) : 'Réserver maintenant'}
                      </button>
                      <p className="text-xs text-gray-400 mt-3 text-center">
                        Données sécurisées via SSL.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Footer Info */}
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-24 sm:pb-32 lg:pb-16 bg-[#FAFAFA]">
                 <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center space-y-10 lg:space-y-0 text-center sm:text-left">
                    
                    <div className="flex flex-col space-y-4 items-center sm:items-start w-full lg:w-auto">
                       <Link href="#main-content" className="flex items-center space-x-2 text-[#1a1a1a]">
                         <span className="text-xl sm:text-2xl font-serif font-medium tracking-tight">Le Jardin d&apos;Italie</span>
                       </Link>
                       <p className="text-sm text-gray-600">8 Rue Gabriel Péri, Massy 91300</p>
                       <p className="text-xs sm:text-sm text-gray-500">© {new Date().getFullYear()}. Tous Droits Réservés.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between w-full lg:w-auto lg:ml-auto space-y-8 md:space-y-0 md:space-x-12">
                      {/* Socials */}
                      <div className="flex space-x-4 sm:space-x-3 text-[#1a1a1a] justify-center md:justify-start">
                      <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:border-[#5D4E3E] hover:bg-[#5D4E3E] hover:text-[#FAFAFA] transition-all" aria-label="Notre Facebook"><Facebook className="w-4 h-4" /></a>
                      <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:border-[#5D4E3E] hover:bg-[#5D4E3E] hover:text-[#FAFAFA] transition-all" aria-label="Notre Instagram"><Instagram className="w-4 h-4" /></a>
                      <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:border-[#5D4E3E] hover:bg-[#5D4E3E] hover:text-[#FAFAFA] transition-all" aria-label="Avis Tripadvisor">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                      </a>
                    </div>

                      {/* Footer Nav & Legals */}
                      <nav className="flex flex-col gap-y-4 sm:gap-y-3 items-center md:items-end w-full">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 sm:gap-x-8 gap-y-3 text-sm font-medium text-[#1a1a1a] md:justify-end">
                          <Link href="#about" className="hover:text-[#5D4E3E] transition-colors">Notre Histoire</Link>
                          <Link href="#reservations" className="hover:text-[#5D4E3E] transition-colors">Réserver</Link>
                          <Link href="#menu" className="hover:text-[#5D4E3E] transition-colors">Menu</Link>
                          <Link href="#contact" className="hover:text-[#5D4E3E] transition-colors">Contact</Link>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2 mt-2 sm:mt-4 pt-4 border-t border-gray-200 w-full md:justify-end text-[11px] sm:text-xs text-gray-500 font-normal">
                          <Link href="/mentions-legales" className="hover:text-[#1a1a1a] transition-colors text-center">Mentions Légales</Link>
                          <Link href="/politique-confidentialite" className="hover:text-[#1a1a1a] transition-colors text-center">Confidentialité</Link>
                          <Link href="/cgv" className="hover:text-[#1a1a1a] transition-colors text-center">CGV</Link>
                        </div>
                      </nav>
                    </div>
                 </div>
              </div>
              
            </footer>
          </main>
        </div>
    </>
  );
}
