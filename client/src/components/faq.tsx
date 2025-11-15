
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Waarom zie ik geen cookiemelding op deze site en op de websites in het portfolio?",
      answer: "Omdat deze websites bewust zijn gebouwd zonder tracking-cookies of andere cookies die toestemming vereisen. Ze werken volledig zonder datagedreven marketingtools, waardoor een cookiemelding niet nodig is. Dit maakt de sites gebruiksvriendelijker, sneller en vrij van onnodige pop-ups.\n\nHet nadeel is dat je als website-eigenaar minder inzicht hebt in het gedrag van bezoekers, omdat er geen trackers worden gebruikt. Daar staat tegenover dat het een zeer klantvriendelijke keuze is: je respecteert de privacy van jouw bezoekers en je dwingt hen niet door cookie-schermen heen. Voor veel ondernemers is dat juist een bewuste keuze."
    },
    {
      question: "Waarom zijn jullie websites zo eenvoudig opgebouwd?",
      answer: "Omdat eenvoud werkt. Bezoekers komen meestal niet voor visuele trucs of complexe effecten, maar voor duidelijke informatie: wie je bent, wat je doet, hoe ze je bereiken en wanneer je open bent. Een eenvoudige website zorgt dat die informatie direct gevonden wordt, zonder afleiding of frustratie. Het resultaat: sneller, duidelijker en klantvriendelijker."
    },
    {
      question: "Waarom gebruiken jullie geen cookies of trackers?",
      answer: "De websites die ik bouw bevatten bewust geen tracking-cookies en geen verborgen meetinstrumenten. De meeste bedrijven hebben dat helemaal niet nodig, en bezoekers worden vaak juist geïrriteerd door pop-ups en keuzes die onduidelijk of lastig zijn.\n\nDoor geen trackers te gebruiken blijft de site schoon, snel en privacyvriendelijk. Het enige nadeel is dat je minder inzicht hebt in bezoekersgedrag — maar voor veel ondernemers is dat een prima ruil voor een betere gebruikerservaring."
    },
    {
      question: "Wat zijn de voordelen van een eenvoudige website ten opzichte van een 'visueel spectaculaire' site?",
      answer: "Mooie websites zijn leuk, maar meestal niet waar bezoekers op wachten. Een eenvoudige website:\n• laadt veel sneller,\n• werkt op alle apparaten,\n• geeft direct antwoord zonder overload,\n• is minder foutgevoelig,\n• en leidt tot meer contactmomenten omdat alles duidelijk en toegankelijk is.\n\nEenvoudige sites doen wat ze moeten doen: informeren en converteren zonder gedoe."
    },
    {
      question: "Voor welke bedrijven of situaties zijn deze websites het meest geschikt?",
      answer: "Voor bedrijven die vooral duidelijke informatie willen bieden: denk aan dienstverleners, freelancers, lokale bedrijven, coaches, praktijken, kleine ondernemingen en makers.\n\nKort gezegd: iedereen die zijn klant wil helpen met heldere info, zonder ingewikkelde functies of webshops."
    },
    {
      question: "Kan ik later altijd extra functies laten toevoegen?",
      answer: "Nee. Ik heb bewust gekozen om websites zo simpel mogelijk te houden. Geen webshops, geen complexe systemen, geen extra modules.\n\nDit houdt de sites snel, veilig, overzichtelijk én betaalbaar.\n\nWel kan ik later teksten of foto's voor je aanpassen als je nieuwe informatie wilt toevoegen."
    },
    {
      question: "Waarom zit er geen webshop-functionaliteit in jullie standaardpakket?",
      answer: "Omdat webshops technisch complex zijn en veel onderhoud vragen. Dat past niet bij mijn filosofie van eenvoudige, overzichtelijke websites die iedereen begrijpt.\n\nWil je wél een webshop, dan adviseer ik een specialistische oplossing die daarvoor is gemaakt."
    },
    {
      question: "Hoe werkt het onderhoud van zo'n eenvoudige website?",
      answer: "De sites zijn zo simpel mogelijk opgebouwd, waardoor er weinig kan stukgaan. Geen databases, geen plug-ins, geen updates die je zelf moet bijhouden.\n\nWil je gegevens aanpassen, nieuwe foto's toevoegen of iets wijzigen? Dan kan ik dat altijd voor je doen."
    },
    {
      question: "Hoe werkt de hosting en moet ik daar zelf iets voor regelen?",
      answer: "Nee. Ik zet de website voor je op via GitHub Pages en koppel daar jouw domeinnaam aan. Je hoeft dus geen hostingpakket te kopen of instellingen te beheren.\n\nHet werkt snel, stabiel en is perfect voor eenvoudige websites."
    },
    {
      question: "Zijn jullie websites ook geschikt voor mobiele telefoons?",
      answer: "Ja. Alle websites worden mobiel-vriendelijk gebouwd. In veel gevallen ziet een bezoeker de site zelfs eerder op mobiel dan op een laptop, dus daar wordt extra aandacht aan besteed."
    },
    {
      question: "Hoe ziet het proces eruit vanaf aanvraag tot oplevering?",
      answer: "Heel eenvoudig:\n1. Je geeft aan wat je wilt laten zien op je site (teksten, foto's, info).\n2. Ik bouw een eerste versie en stem die met je af.\n3. We werken eventuele aanpassingen door.\n4. Ik zet de site online op jouw domein.\n\nOmdat er geen ingewikkelde systemen worden gebruikt, gaat dit proces meestal snel en soepel."
    },
    {
      question: "Bieden jullie ook hulp bij het schrijven van teksten?",
      answer: "Ja. Ik kan helpen met het herschrijven of verduidelijken van teksten, zodat je boodschap helder en toegankelijk wordt."
    },
    {
      question: "Kan ik mijn eigen domeinnaam gebruiken of moet ik een nieuwe kopen?",
      answer: "Je kunt je eigen domeinnaam gebruiken. Mocht je nog geen domein hebben, dan help ik je bij de aanschaf en koppel ik deze aan de website."
    },
    {
      question: "Kan ik mijn bestaande website laten omzetten naar een simpelere variant?",
      answer: "Ja, dat kan. Als je huidige site te druk, langzaam of ingewikkeld is, kan ik een nieuwe, slanke versie maken die alleen de belangrijkste informatie bevat. Heel geschikt voor ondernemers die rust en duidelijkheid zoeken."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Antwoorden op de meest gestelde vragen
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-muted-foreground">
                Heb je een andere vraag?{" "}
                <button
                  onClick={scrollToContact}
                  className="text-secondary hover:underline font-medium"
                >
                  Stuur gerust een mail!
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
