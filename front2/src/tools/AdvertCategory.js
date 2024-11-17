import React from 'react';
import './AdvertCategory.css';
const CategoryCard = ({ title, items }) => {
  return (
    <div className="category-card">
      <h3 className="category-title">{title}</h3>
      <div className="category-grid">
        {items.map((item, index) => (
          <div key={index} className="category-item">
            <img src={item.imgSrc} alt={item.altText} className="category-image" />
            <span className="category-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="view-more-link">
        Voir plus <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

const AdvertCategories = () => {
  const vehicleItems = [
    { imgSrc: 'https://placehold.co/300x200', altText: 'Moto', label: 'Moto' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Voitures', label: 'Voitures' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Camions', label: 'Camions' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Pièces de rechange', label: 'Pièces de rechange' },
  ];

  const immobilierItems = [
    { imgSrc: 'https://placehold.co/300x200', altText: 'Maison et Villa', label: 'Maison et Villa' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Magasins', label: 'Magasins' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Colocations', label: 'Colocations' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Location de vacances', label: 'Location de vacances' },
  ];

  const informatiqueItems = [
    { imgSrc: 'https://placehold.co/300x200', altText: 'Appareils Photos', label: 'Appareils Photos' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Télévisions', label: 'Télévisions' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Ordinateurs Portables', label: 'Ordinateurs Portables' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Téléphones', label: 'Téléphones' },
  ];

  const habillementItems = [
    { imgSrc: 'https://placehold.co/300x200', altText: 'Équipement pour enfants', label: 'Équipement pour enfants' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Bijoux', label: 'Bijoux' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Vêtements', label: 'Vêtements' },
    { imgSrc: 'https://placehold.co/300x200', altText: 'Produits de beauté', label: 'Produits de beauté' },
  ];

  return (
    <div className="container">
            <CategoryCard title="Véhicules" items={vehicleItems} />
      <CategoryCard title="Immobilier" items={immobilierItems} />
      <CategoryCard title="Informatique et Multimédias" items={informatiqueItems} />
      <CategoryCard title="Habillement et bien-être" items={habillementItems} />

    </div>
  );
};

export default AdvertCategories;
