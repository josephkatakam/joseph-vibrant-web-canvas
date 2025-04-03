
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EducationItemProps {
  title: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

const EducationItem = ({ 
  title, 
  institution, 
  duration, 
  location, 
  description, 
  delay,
  isLast = false 
}: EducationItemProps) => {
  return (
    <div className={`flex animate-fade-in animate-delay-${delay}`}>
      <div className="flex flex-col items-center mr-4">
        <div className="w-4 h-4 rounded-full bg-gradient-primary"></div>
        {!isLast && <div className="w-1 flex-grow bg-gradient-primary"></div>}
      </div>
      <div className="pb-8">
        <Card className="mb-4 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                {duration}
              </span>
            </div>
            <h4 className="font-medium text-primary">{institution}</h4>
            <div className="text-sm text-muted-foreground mb-3">{location}</div>
            <p className="text-gray-600">{description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const EducationSection = () => {
  const educationHistory = [
    {
      title: "Bachelor of Science in Data Science",
      institution: "Malla Reddy University",
      duration: "JUN 2019 - JUN 2023",
      location: "Hyderabad, Telangana",
      description: "Focused on data structures and algorithms, database management systems, and software engineering principles. Completed projects in web development and data analysis.",
      delay: 100
    },
    {
      title: "Intermediate Education",
      institution: "SR Junior College",
      duration: "JUN 2017 - APR 2019",
      location: "Warangal, Telangana",
      description: "Completed intermediate education with focus on sciences and mathematics with a strong academic performance.",
      delay: 200
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <EducationItem 
              key={index}
              title={edu.title}
              institution={edu.institution}
              duration={edu.duration}
              location={edu.location}
              description={edu.description}
              delay={edu.delay}
              isLast={index === educationHistory.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
