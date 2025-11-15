import { Gift, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sterImage from "../../../attached_assets/Ster van het Verhaal_1762157222343.png";
import sinterklaasImage from "../../../attached_assets/Sinterklaas Kleurboek_1762157222341.png";
import silverwoodImage from "../../../attached_assets/voorbeeld site silverwood coloring_1763228172359.jpg";
import barbershopImage from "../../../attached_assets/Barbershop Nieuwland_1762157222339.png";
import annesDierenImage from "../../../attached_assets/voorbeeld site Annes Dieren_1763228172358.jpg";

export default function Portfolio() {
  const portfolioItems = [
    {
      image: sterImage,
      title: "Ster van het Verhaal",
      description: "Een e-commerce website voor gepersonaliseerde kinderboeken. Ouders kunnen boeken samenstellen waarin hun kind de hoofdrol speelt, compleet met hun eigen naam en illustraties op basis van foto's.",
      link: "https://stervanhetverhaal.nl/"
    },
    {
      image: sinterklaasImage,
      title: "Sinterklaas Kleurboek",
      description: "Portfolio website voor Sinterklaas kleurboeken. Bekijk het assortiment met hoogwaardige voorbeeldcovers en -pagina's. Bezoekers kunnen eenvoudig doorklikken naar Amazon voor aankoop van de fysieke kleurboeken.",
      link: "https://sinterklaaskleurboek.nl/"
    },
    {
      image: barbershopImage,
      title: "Barbershop Nieuwland",
      description: "Moderne website voor een premium barbershop in Amersfoort. Bekijk de diensten, prijzen en foto's van het interieur. Afgestemd op de doelgroep met een clean en mannelijke uitstraling.",
      link: "https://www.barbershopnieuwland.nl/"
    },
    {
      image: annesDierenImage,
      title: "Anne's Dieren Tekeningen",
      description: "Portfolio website voor handgemaakte dierentekeningen. Bekijk het assortiment aan schattige en gedetailleerde tekeningen van verschillende dieren, gemaakt met zorg en passie.",
      link: "https://vincentvoorveld.github.io/Annesdierentekeningen/"
    },
    {
      image: silverwoodImage,
      title: "Silverwood Coloring",
      description: "Portfolio website met kleurboeken, te bestellen op Amazon. Een overzichtelijke presentatie van het assortiment kleurboeken voor alle leeftijden.",
      link: "https://silverwoodcoloring.com/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bekijk enkele van onze recent gerealiseerde projecten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="hover-lift cursor-pointer overflow-hidden"
              onClick={() => item.link && window.open(item.link, '_blank')}
            >
              <img
                src={item.image}
                alt={`Screenshot van ${item.title} - ${item.description.substring(0, 50)}`}
                className="w-full h-48 object-cover object-top"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Free website offer card */}
          <Card className="hover-lift cursor-pointer border-2 border-dashed border-secondary/40 bg-white/50 backdrop-blur-sm overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300"
                alt="Laptop met dashboard"
                className="w-full h-48 object-cover opacity-80"
              />
              <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Gratis Website
              </div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-secondary mb-3">Jouw Website Hier!</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Wil je een gratis website? Wij hebben op dit moment de ruimte om één gratis website te maken.*
              </p>
              <a href="#contact">
                <Button
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-200 mb-3 w-full"
                >
                  Claim jouw gratis website!
                </Button>
              </a>
              <p className="text-muted-foreground text-xs">*voorwaarden zijn van toepassing</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg px-8 py-4 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Bespreek jouw project
          </Button>
        </div>
      </div>
    </section>
  );
}