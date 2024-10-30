"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-provider";
import { Sun, Moon, Languages } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
          >
            <Languages className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-primary transition-colors">
            {t("about")}
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            {t("skills")}
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            {t("projects")}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t("contact")}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}