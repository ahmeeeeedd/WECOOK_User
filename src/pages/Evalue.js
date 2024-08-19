import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Evalue.css";

function Evalue() {
  const [serviceRating, setServiceRating] = useState(0);
  const [ambianceRating, setAmbianceRating] = useState(0);
  const [dishRating, setDishRating] = useState(0);
  const [evaluationsCompleted, setEvaluationsCompleted] = useState(false);

  const handleServiceRating = (rating) => {
    setServiceRating(rating);
    checkEvaluationsCompletion(rating, ambianceRating, dishRating);
  };

  const handleAmbianceRating = (rating) => {
    setAmbianceRating(rating);
    checkEvaluationsCompletion(serviceRating, rating, dishRating);
  };

  const handleDishRating = (rating) => {
    setDishRating(rating);
    checkEvaluationsCompletion(serviceRating, ambianceRating, rating);
  };

  const checkEvaluationsCompletion = (service, ambiance, dish) => {
    if (service !== 0 && ambiance !== 0 && dish !== 0) {
      setEvaluationsCompleted(true);
    } else {
      setEvaluationsCompleted(false);
    }
  };

  const handleValidation = () => {
    const isConfirmed = window.confirm(
      "Êtes-vous sûr de vouloir soumettre votre évaluation?"
    );
    if (isConfirmed) {
      alert("Évaluation validée !");
    }
  };

  return (
    <div className="enhanced-evalue-container">
      <h1 className="enhanced-evalue-title">Partagez Votre Expérience</h1>

      <div className="enhanced-rating-section">
        <p className="enhanced-rating-label">Service:</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <FaStar
            key={rating}
            onClick={() => handleServiceRating(rating)}
            className="enhanced-star"
            style={{
              color: rating <= serviceRating ? "#FFD700" : "#ccc",
            }}
          />
        ))}
      </div>

      <div className="enhanced-rating-section">
        <p className="enhanced-rating-label">Ambiance:</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <FaStar
            key={rating}
            onClick={() => handleAmbianceRating(rating)}
            className="enhanced-star"
            style={{
              color: rating <= ambianceRating ? "#FFD700" : "#ccc",
            }}
          />
        ))}
      </div>

      <div className="enhanced-rating-section">
        <p className="enhanced-rating-label">Nos Plats:</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <FaStar
            key={rating}
            onClick={() => handleDishRating(rating)}
            className="enhanced-star"
            style={{
              color: rating <= dishRating ? "#FFD700" : "#ccc",
            }}
          />
        ))}
      </div>

      {evaluationsCompleted && (
        <button className="enhanced-validate-button" onClick={handleValidation}>
          Valider mon évaluation
        </button>
      )}

      <p className="enhanced-satisfaction-text">
        NOTRE BUT, C'EST VOTRE SATISFACTION
      </p>
    </div>
  );
}

export default Evalue;
