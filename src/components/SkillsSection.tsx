import React from "react";
import { Progress } from "@/components/ui/progress";

const SkillItem = ({ name, value, className }: { name: string; value: number; className?: string }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} className={className} />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I am constantly learning and expanding my skillset. Here are some of my key skills:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillItem name="HTML & CSS" value={90} />
          <SkillItem name="JavaScript" value={85} />
          <SkillItem name="React" value={80} />
          <SkillItem name="Java" value={75} />
          <SkillItem name="Spring Boot" value={70} />
          <SkillItem name="SQL" value={65} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
