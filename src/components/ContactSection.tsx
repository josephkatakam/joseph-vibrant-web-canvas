
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { GitHub, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  delay: number;
}

const ContactItem = ({ icon, title, value, href, delay }: ContactItemProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center p-4 rounded-lg hover:bg-muted transition-colors animate-fade-in animate-delay-${delay}`}
    >
      <div className="mr-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-primary text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </a>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "vineethgaming@gmail.com",
      href: "mailto:vineethgaming@gmail.com",
      delay: 100
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7075321860",
      href: "tel:+917075321860",
      delay: 200
    },
    {
      icon: <GitHub className="h-6 w-6" />,
      title: "GitHub",
      value: "josephkatakam",
      href: "https://github.com/josephkatakam",
      delay: 300
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Joseph Vineeth Reddy",
      href: "https://www.linkedin.com/in/joseph-vineeth-reddy-katakam-9b5632299/",
      delay: 400
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or collaborations. I'm always open to discussing new projects and ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col space-y-2">
                {contactInfo.map((item, index) => (
                  <ContactItem 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                    href={item.href}
                    delay={item.delay}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your Email" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      placeholder="Message Subject" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder="Your Message" 
                      rows={6} 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
