"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import "./styles/border-animation.css";
import CustomCursor from "@/components/CustomCursor";

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
    image: "/images/digidex.png",
    video: "/videos/digidexVideo2.5.mp4",
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

const contactInfo = {
  email: "christopherhayling9@gmail.com",
  github: "https://github.com/chr1st0ph3r9",
  linkedin: "https://www.linkedin.com/in/christopher19/"
};

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <>
      <CustomCursor />
      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center gap-8 flex-col md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center md:text-left md:flex-1">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("welcome")}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("description")}
            </motion.p>
          </div>

          <motion.div
            className="border-animation"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="relative w-64 h-64">
              <Image
                src="images/imagen-perfil.jpg" // Reemplaza con el nombre real de tu imagen
                alt="Christopher Hayling"
                fill
                className="rounded-full object-cover filter drop-shadow 2px 4px 6px black grayscale 1"
                priority
              />
            </div>
          </motion.div>
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
                    {project.title === "Digidex" ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform group-hover:opacity-0"
                        />
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    )}
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

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.h2
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("contact")}
          </motion.h2>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail className="h-5 w-5" />
                    {contactInfo.email}
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>
    </>
  );
}