
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SkillProps {
  name: string;
  level: number;
  icon: string;
  delay: number;
}

const Skill = ({ name, level, icon, delay }: SkillProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
      `animate-fade-in animate-delay-${delay}`
    )}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-md bg-gradient-primary text-white">
            <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }}></span>
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <span className="text-sm font-medium text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" indicatorClassName="bg-gradient-primary" />
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: "HTML", level: 90, icon: "&#xf13b;", delay: 100 },
    { name: "CSS", level: 85, icon: "&#xf38b;", delay: 200 },
    { name: "JavaScript", level: 80, icon: "&#xf3b9;", delay: 300 },
    { name: "Java", level: 85, icon: "&#xf4e4;", delay: 400 },
    { name: "UI/UX Design", level: 75, icon: "&#xf1fc;", delay: 500 },
    { name: "React", level: 70, icon: "&#xf41b;", delay: 100 }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Skill 
              key={index} 
              name={skill.name} 
              level={skill.level} 
              icon={skill.icon}
              delay={skill.delay} 
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "C++", "Figma", "Git", "MySQL", "Bootstrap", "Tailwind CSS"].map((tech, index) => (
              <div 
                key={index} 
                className="px-5 py-3 bg-white rounded-full shadow text-gray-700 font-medium hover:shadow-md transition-shadow"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
