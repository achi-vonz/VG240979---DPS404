import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function Planetas() {
  const [planetas, setPlanetas] = useState([]);
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("masa");
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/planetas.json")
      .then((res) => res.json())
      .then((data) => setPlanetas(data));
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const renderTabContent = () => {
    if (!selected) return null;
    switch (activeTab) {
      case "masa":
        return <p><strong>Masa:</strong> {selected.masa}</p>;
      case "distancia":
        return <p><strong>Distancia al Sol:</strong> {selected.distancia}</p>;
      case "temperatura":
        return <p><strong>Temperatura:</strong> {selected.temperatura}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="planetas-container">
      <h2 className="section-title">Planetas del Sistema Solar</h2>
      <div className="carousel">
        <button onClick={scrollLeft} className="carousel-arrow left-arrow">&#10094;</button>
        <div className="carousel-slider" ref={sliderRef}>
          {planetas.map((p, index) => (
            <div 
              key={index} 
              className="carousel-item" 
              onClick={() => { setSelected(p); setActiveTab("masa"); }}
            >
              <img src={p.imagen} alt={p.nombre} className="planet-img" />
              <p className="planet-name">{p.nombre}</p>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="carousel-arrow right-arrow">&#10095;</button>
      </div>

      {selected && (
        <div className="modal-background">
          <div className="modal-card">
            <button className="close-button" onClick={() => setSelected(null)}>X</button>
            <h3 className="planet-title">{selected.nombre}</h3>
            <div className="tabs-info">
              <button 
                className={`tab-info ${activeTab === "masa" ? "active" : ""}`}
                onClick={() => setActiveTab("masa")}
              >
                Masa
              </button>
              <button 
                className={`tab-info ${activeTab === "distancia" ? "active" : ""}`}
                onClick={() => setActiveTab("distancia")}
              >
                Distancia
              </button>
              <button 
                className={`tab-info ${activeTab === "temperatura" ? "active" : ""}`}
                onClick={() => setActiveTab("temperatura")}
              >
                Temperatura
              </button>
            </div>
            <div className="tab-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
