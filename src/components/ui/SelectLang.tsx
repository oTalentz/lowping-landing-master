"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
]

export default function SelectLangButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-md border-2 border-blue-300"
        whileTap={{ scale: 0.97 }}
      >
        <span className="text-base">{selectedLanguage.flag}</span>
        <span>{selectedLanguage.name}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white/10 border border-gray-200 rounded-md shadow-lg"
          >
            <div className="py-1">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  className={cn(
                    "flex items-center w-full px-4 py-2 text-sm text-left",
                    selectedLanguage.code === language.code ? "text-primary" : "text-gray-400",
                  )}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                >
                  <span className="mr-2 text-base">{language.flag}</span>
                  <span className="flex-1">{language.name}</span>
                  {selectedLanguage.code === language.code && <Check className="w-4 h-4" />}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

