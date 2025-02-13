// page.js
import styles from "./page.module.css";
import Form from "@/components/Form";

export default function Home() {
 return (
 <main className={styles.main}>
 <div className="App">
 <div>
 <p>Gestiona tu lista de compras</p>
 <Form />
 </div>
 </div>
 </main>
 );
}