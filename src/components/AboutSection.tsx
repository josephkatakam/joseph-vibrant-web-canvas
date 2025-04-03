
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm Joseph Vineeth Reddy, a passionate Front End Developer with a strong foundation in web development and UI/UX design. Currently pursuing my Bachelor's degree in Data Science at Malla Reddy University, I am dedicated to creating clean, efficient, and user-friendly web experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              I enjoy tackling complex problems and transforming ideas into reality through elegant and efficient code. My expertise includes HTML, CSS, JavaScript, Java, and UI/UX design principles, which I continuously enhance through practical projects and ongoing learning.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Outside of coding, I am enthusiastic about staying updated with the latest web technologies and design trends. I am always eager to collaborate on new projects and contribute my skills to create meaningful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
