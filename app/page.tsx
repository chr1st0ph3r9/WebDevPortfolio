"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const technologies = [
  "Figma", "Excel", "StyledComponents", "ReactJS", "Sendgrid", "Unity",
  "Firebase", "authJS", "DynamoDB", "NextJS", "CSS", "TS", "Git",
  "Github", "JS", "C#", "VueJS", "C++"
];

const projects = [
  {
    title: "Digidex",
    description: {
      en: "A web application that consumes the Digimon API, built with NextJS",
      es: "Una aplicación web que consume la API de Digimon, construida con NextJS"
    },
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1200",
    link: "https://digidex-theta.vercel.app/",
    tech: ["NextJS", "API", "React"]
  },
  {
    title: "Game Portfolio",
    description: {
      en: "A portfolio showcasing developed games, built using Bolt.new",
      es: "Un portafolio mostrando juegos desarrollados, construido usando Bolt.new"
    },
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200",
    link: "https://videogame-portfolio.vercel.app/",
    tech: ["Unity", "C#", "Game Development"]
  }
];

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main className="container mx-auto px-4 pt-20">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t("description")}
          </motion.p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t("skills")}
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <Badge 
              key={tech}
              variant="secondary"
              className="text-lg py-2 px-4"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t("projects")}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {t("viewProject")} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}