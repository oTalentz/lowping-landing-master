"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

type FaqItem = {
    question: string;
    answer: string;
};

interface FaqProps {
    items: FaqItem[];
    title?: string;
    className?: string;
}

export default function FaqComponent({
    items,
    className,
}: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Controla qual item está aberto

    const handleToggle = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Fecha o item se ele já estiver aberto
    };

    return (
        <div className={cn("w-full min-w-full", className)}>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <FaqItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index} // Passa o estado do item específico
                        onToggle={() => handleToggle(index)} // Passa a função de controle
                    />
                ))}
            </div>
        </div>
    );
}

function FaqItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
    return (
        <motion.div
            className="border border-border rounded-lg overflow-hidden text-white w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
        >
            <motion.button
                className="flex justify-between items-center w-full p-4 text-left bg-background hover:bg-muted/50 transition-colors"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="font-medium break-words pr-2">{item.question}</span>
                <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }} 
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
            </motion.button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <div className="p-4 pt-0 border-t border-border w-full overflow-y-auto max-h-[200px]">
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                className="text-muted-foreground break-words"
                            >
                                {item.answer}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}