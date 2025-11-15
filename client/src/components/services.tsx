import { MessageSquare, Wrench, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const steps = [
    {
      icon: MessageSquare,
      step: "1",
      title: "Jouw ideeën en doelen",
      description: "We bespreken wat jouw ideeën zijn over je website en de doelen die je hebt. Op basis daarvan maken wij een eerste versie op basis van jouw wensen.",
      color: "text-secondary"
    },
    {
      icon: Wrench,
      step: "2",
      title: "Aanpassingen verwerken",
      description: "We bespreken welke aanpassingen nodig zijn of wat er toegevoegd moet worden en die wijzigingen verwerken wij in de website.",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "Finale controle",
      description: "We bespreken samen of de site voldoet aan alle wensen.",
      color: "text-green-500"
    },
    {
      icon: Globe,
      step: "4",
      title: "Live op internet",
      description: "De site wordt gekoppeld aan een domeinnaam en live op het internet gezet.",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="diensten" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Hoe het werkt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In vier heldere stappen naar jouw nieuwe website
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover-lift cursor-pointer relative flex flex-col h-full">
              <CardContent className="p-8 flex flex-col">
                <div className="flex items-start justify-between mb-6 h-12">
                  <div className={`w-12 h-12 ${step.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center`}>
                    <step.icon className={`${step.color} text-xl w-6 h-6`} />
                  </div>
                  <div className="text-4xl font-bold text-primary/10 leading-none">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 min-h-[3.5rem] flex items-start">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}