import React from "react";
import { Link } from "react-router-dom";
import "./Recettee.css";

function Recettee() {
  return (
    <div className="recette-page">
      <div className="container">
        <div className="tips-section">
          <h2>💡 Nos Astuces</h2>
          <p>
            Lorsque les recettes ne se déroulent pas comme prévu, voici quelques
            conseils :
          </p>
          <ul>
            <li>🧐 Vérifiez les mesures avec précision.</li>
            <li>🕵️ Assurez-vous que les ingrédients sont frais.</li>
            <li>😐 Suivez les étapes attentivement.</li>
            <li>😟 N'ayez pas peur d'expérimenter des ajustements.</li>
          </ul>
        </div>

        <div className="next-steps-section">
          <h2>Que faire ensuite ?</h2>
          <p>Si le plat ne fonctionne toujours pas, voici quelques options :</p>
          <a
            href="https://www.google.tn/maps/@34.6113892,8.7590835,6z?hl=fr&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="action-button map-button">
              VENEZ CHEZ NOUS
            </button>
          </a>
          <p>
            Si vous avez le temps, essayez une autre recette et concentrez-vous
            mieux.
          </p>
          <Link to="/recette">
            <button className="action-button recipe-button">
              ESSAYER DE PREPARER UN DE NOS PLATS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recettee;
