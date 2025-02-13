// page.js
"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Modal from "@/components/Modal";
import languages from "@/data.json";

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(null);
  return (
    <main className={styles.main}>
      <h1>Lenguajes de Programación</h1>
      <div className={styles.grid}>
        {languages.map((lang, index) => (
          <div key={index} className={styles.card} onClick={() => setSelectedLang(lang)}>
            <img src={lang.image} alt={lang.name} className={styles.image} />
            <h2>{lang.name}</h2>
          </div>
        ))}
      </div>
      {selectedLang && <Modal language={selectedLang} onClose={() => setSelectedLang(null)} />}
    </main>
  );
}