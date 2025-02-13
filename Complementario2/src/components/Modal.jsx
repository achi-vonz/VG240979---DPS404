// Modal.jsx
import styles from "../app/page.module.css";

const Modal = ({ language, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{language.name}</h2>
        <p>{language.description}</p>
        <img src={language.image} alt={language.name} className={styles.modalImage} />
        <button onClick={onClose} className={styles.closeButton}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;