import React from "react";
import "./Header.css";
import Image from "../pictures/BG.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-image">
        <img src={Image} alt="Restaurant Background" />
      </div>
      <div className="header-content">
        <h2 className="header-title">SOYEZ LES BIENVENUS</h2>
        <p className="header-description">
          Bienvenue chez{" "}
          <span className="restaurant-name">[Nom du Restaurant]</span>,
          l'endroit où l'art culinaire rencontre l'élégance et l'innovation.
          Notre passion pour la cuisine exceptionnelle et l'expérience
          gastronomique unique se reflète dans chaque plat que nous servons.
          Plongez dans un voyage gustatif inoubliable, où chaque saveur est
          méticuleusement créée avec des ingrédients frais et de qualité. <br />{" "}
          Nous sommes impatients de vous accueillir et de partager notre passion
          pour la gastronomie avec vous.
        </p>
        <div className="header-services-contact">
          <div className="header-services">
            <h3>Nos Services</h3>
            <ul>
              <li>Menu Gastronomique</li>
              <li>Service Traiteur</li>
              <li>Événements Spéciaux</li>
              <li>Recette Personalisé</li>
            </ul>
          </div>
          <div className="header-contact">
            <h3>Contact</h3>
            <p>
              Email:{" "}
              <a href="mailto:contact@restaurant.com">contact@restaurant.com</a>
            </p>
            <p>
              Téléphone: <a href="tel:+123456789">+123 456 789</a>
            </p>
            <p>Adresse: 123 Rue de la Gastronomie, Paris, France</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
