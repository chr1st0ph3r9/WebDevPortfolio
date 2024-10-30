"use client";

import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    description: "25-year-old Full-stack Developer with great attention to detail and social skills with teamwork abilities. I am passionate about quality service and innovative technologies, I love learning new things and my current challenge is to learn automated testing.",
    viewProject: "View Project",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
  },
  es: {
    about: "Sobre Mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    description: "Desarrollador Full-stack de 25 años con gran atención a los detalles y aptitudes sociales con habilidades de trabajo en equipo. Soy apasionado por el servicio de calidad y las tecnologías innovadoras, me encanta aprender cosas nuevas y mi desafío actual es aprender pruebas con automatizaciones.",
    viewProject: "Ver Proyecto",
    darkMode: "Modo Oscuro",
    lightMode: "Modo Claro",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};