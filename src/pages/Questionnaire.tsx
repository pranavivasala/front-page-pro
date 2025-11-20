import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { User, BookOpen, Target, Settings, Clock, Send } from "lucide-react";

const steps = [
  { id: 1, name: "Main Goal", icon: Target },
  { id: 2, name: "Current Level", icon: User },
  { id: 3, name: "Time Commitment", icon: Clock },
  { id: 4, name: "Learning Interest", icon: BookOpen },
  { id: 5, name: "Setup & Preferences", icon: Settings },
  { id: 6, name: "Final Step", icon: Send },
];

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    level: "",
    timeCommitment: "",
    interest: "",
    device: "",
    language: "",
    name: "",
    email: "",
    subjects: [] as string[],
  });

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border-border shadow-lg">
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
              Welcome to Your Learning Journey
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Help us personalize your experience by answering a few questions
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Progress Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-muted-foreground">Progress</span>
                <span className="font-semibold text-foreground">
                  {currentStep} of {steps.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Step Icons */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <div key={step.id} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg scale-110"
                          : isCompleted
                          ? "bg-primary/80 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-xs font-medium text-center text-muted-foreground hidden md:block">
                      {step.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Step Content */}
            <div className="min-h-[400px] py-6">
              {/* Step 1: Main Goal */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">What's your main goal right now?</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">Choose the option that matches your goal the most</p>
                  <RadioGroup value={formData.goal} onValueChange={(value) => updateFormData("goal", value)}>
                    <div className="space-y-3">
                      {[
                        { value: "job", label: "I want a tech job / placement", emoji: "💼" },
                        { value: "basics", label: "I want to understand basics clearly", emoji: "📚" },
                        { value: "projects", label: "I want to build real projects", emoji: "🚀" },
                        { value: "exams", label: "I want to score well in exams", emoji: "🎯" },
                        { value: "exploring", label: "I'm just exploring, not sure yet", emoji: "🔍" },
                      ].map((option) => (
                        <Label
                          key={option.value}
                          htmlFor={option.value}
                          className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all bg-card"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <span className="text-2xl">{option.emoji}</span>
                          <span className="font-medium flex-1">{option.label}</span>
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Step 2: Current Level */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Where are you starting from?</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">Be honest, this helps us suggest the right starting point</p>
                  <RadioGroup value={formData.level} onValueChange={(value) => updateFormData("level", value)}>
                    <div className="space-y-3">
                      {[
                        {
                          value: "beginner",
                          label: "Complete beginner",
                          desc: "I know almost nothing / very basic",
                        },
                        {
                          value: "some-basics",
                          label: "Some basics",
                          desc: "I know a little bit of coding / HTML / Java etc.",
                        },
                        {
                          value: "intermediate",
                          label: "Intermediate",
                          desc: "I've done some projects / DSA / subjects already",
                        },
                        {
                          value: "advanced",
                          label: "Advanced",
                          desc: "I just want a proper structured roadmap",
                        },
                      ].map((option) => (
                        <Label
                          key={option.value}
                          htmlFor={option.value}
                          className="flex items-start space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all bg-card"
                        >
                          <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                          <div className="flex-1">
                            <div className="font-semibold text-foreground">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.desc}</div>
                          </div>
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Step 3: Time Commitment */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">How much time can you give per week?</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    How much time can you realistically spend on learning?
                  </p>
                  <RadioGroup
                    value={formData.timeCommitment}
                    onValueChange={(value) => updateFormData("timeCommitment", value)}
                  >
                    <div className="space-y-3">
                      {[
                        { value: "less-5", label: "Less than 5 hours / week", desc: "Very busy, just small steps" },
                        { value: "5-10", label: "5–10 hours / week", desc: "Can manage regularly" },
                        { value: "10-15", label: "10–15 hours / week", desc: "I can focus seriously" },
                        { value: "15-plus", label: "15+ hours / week", desc: "Fully serious, want fast progress" },
                      ].map((option) => (
                        <Label
                          key={option.value}
                          htmlFor={option.value}
                          className="flex items-start space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all bg-card"
                        >
                          <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                          <div className="flex-1">
                            <div className="font-semibold text-foreground">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.desc}</div>
                          </div>
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Step 4: Learning Interest */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">What do you want to learn first?</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">Pick the area you are most interested in right now</p>
                  <RadioGroup value={formData.interest} onValueChange={(value) => updateFormData("interest", value)}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { value: "web-dev", label: "Web Development", desc: "Websites, front-end, back-end", emoji: "🌐" },
                        { value: "java", label: "Core Java / Programming", desc: "Programming fundamentals", emoji: "☕" },
                        { value: "dsa", label: "Data Structures & Algorithms", desc: "DSA for problem solving", emoji: "🧠" },
                        {
                          value: "cs-fundamentals",
                          label: "CS Fundamentals",
                          desc: "OS, DBMS, Networks, etc.",
                          emoji: "💻",
                        },
                        { value: "mobile", label: "Mobile App Development", desc: "iOS & Android apps", emoji: "📱" },
                        { value: "not-sure", label: "Not sure", desc: "I need help choosing", emoji: "❓" },
                      ].map((option) => (
                        <Label
                          key={option.value}
                          htmlFor={option.value}
                          className="flex items-start space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all bg-card"
                        >
                          <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                          <span className="text-2xl">{option.emoji}</span>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.desc}</div>
                          </div>
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Step 5: Setup & Preferences */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Setup & Preferences</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">What device do you have?</Label>
                      <RadioGroup value={formData.device} onValueChange={(value) => updateFormData("device", value)}>
                        <div className="space-y-2">
                          {[
                            { value: "laptop", label: "Laptop + good internet" },
                            { value: "phone", label: "Only phone + internet" },
                            { value: "shared", label: "Shared / lab system only" },
                          ].map((option) => (
                            <Label
                              key={option.value}
                              htmlFor={option.value}
                              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-all bg-card"
                            >
                              <RadioGroupItem value={option.value} id={option.value} />
                              <span>{option.label}</span>
                            </Label>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Which language are you comfortable with?
                      </Label>
                      <RadioGroup value={formData.language} onValueChange={(value) => updateFormData("language", value)}>
                        <div className="space-y-2">
                          {[
                            { value: "english", label: "English" },
                            { value: "hinglish", label: "Mix of English + local language (Hinglish, etc.)" },
                          ].map((option) => (
                            <Label
                              key={option.value}
                              htmlFor={option.value}
                              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-all bg-card"
                            >
                              <RadioGroupItem value={option.value} id={option.value} />
                              <span>{option.label}</span>
                            </Label>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Basic Info */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Send className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Almost there! Just a few more details</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium mb-2 block">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-2 block">
                        Email or Mobile Number
                      </Label>
                      <Input
                        id="email"
                        placeholder="email@example.com or +1234567890"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length}
                className="px-8"
              >
                {currentStep === steps.length ? "Submit" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Questionnaire;
