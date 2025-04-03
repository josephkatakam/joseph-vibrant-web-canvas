
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay: number;
}

const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl, delay }: ProjectProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50",
      `animate-fade-in animate-delay-${delay}`
    )}>
      <div className="overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
        <Button variant="ghost" className="text-primary">
          View Details <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Recipe Sharing Platform",
      description: "A Java-based web application for sharing and discovering recipes, featuring user authentication, recipe management, and search functionality.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=2070",
      tags: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/josephkatakam/recipe-sharing",
      delay: 100
    },
    {
      title: "CostMate - Expense Tracker",
      description: "A Java-based expense tracking application that helps users monitor their spending habits, create budgets, and generate financial reports.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
      tags: ["Java", "JavaFX", "SQLite", "Chart.js"],
      githubUrl: "https://github.com/josephkatakam/costmate",
      delay: 200
    },
    {
      title: "Travel & Tourism Website",
      description: "A comprehensive travel website providing information about various destinations, attractions, activities, and travel tips with online booking capabilities.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      delay: 300
    },
    {
      title: "Pet Care Application",
      description: "An application providing information about pet health care, medication recommendations, online booking for pet services, and pet food delivery.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=2071",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      delay: 400
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={project.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/josephkatakam" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gradient-border">
              View More on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
