import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 bg-card border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
