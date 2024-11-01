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
    welcome: "Welcome!",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    description: "Hi!, my name is Christopher, I'm 25-year-old Full-stack Developer I'm passionate about the brand new technologies, the innovations that comes with it and the experiences that they allows us to have, I love learning new things and finding new challenges!",
    viewProject: "View Project",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
  },
  es: {
    welcome: "¡Bienvenido!",
    about: "Sobre Mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contáctame",
    description: "¡Hola! Mi nombre es Christopher, soy un Desarrollador Full-stack de 25 años soy un apasionado de las nuevas tecnologías, las innovaciones que vienen con ellas y las experiencias que nos permiten tener. ¡Me encanta aprender cosas nuevas y encontrar nuevos desafíos!",
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