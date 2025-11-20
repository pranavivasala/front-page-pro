import FeatureCard from "./FeatureCard";
import { 
  Focus, 
  Search, 
  Clock, 
  Layers, 
  Languages, 
  BarChart3, 
  Rocket, 
  Shield 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Focus,
      title: "Personalized Learning Paths",
      description: "AI-driven recommendations tailored to each learner's skills, goals, and background"
    },
    {
      icon: Search,
      title: "Career Explorer",
      description: "Discover future-ready job roles and the skills needed to reach them"
    },
    {
      icon: Clock,
      title: "Skill Gap Analyzer",
      description: "Instant insights into current vs required skills with actionable training suggestions"
    },
    {
      icon: BarChart3,
      title: "Real-time Updates",
      description: "Recommendations adapt continuously based on learner progress and labor market trends"
    },
    {
      icon: Layers,
      title: "NSQF-aligned Programs",
      description: "All courses and credentials mapped to NCVET's National Skills Qualifications Framework"
    },
    {
      icon: Languages,
      title: "Inclusive & Multilingual",
      description: "Supports diverse learners with multiple language options and accessibility-first design"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboard",
      description: "Track progress, milestones, and learning achievements in one intuitive interface"
    },
    {
      icon: Rocket,
      title: "Scalable & Secure",
      description: "Capable of serving millions of learners while ensuring full data privacy and compliance"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
