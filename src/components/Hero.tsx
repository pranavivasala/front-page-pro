import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 max-w-5xl mx-auto leading-tight">
          Smarter choices. Better skills. Brighter future.
        </h1>
        <Link to="/questionnaire">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
