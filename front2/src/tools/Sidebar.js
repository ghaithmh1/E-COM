import React from 'react';
import Hero from '../components/Hero';
import Recent from '../components/RecentAdvert';
import AdvertCategories from './AdvertCategory';

const Side = ({ categories }) => {
  return (
    <div className="webpage-sidebar">
      <ul className="webpage-sidebar-list">
        {categories.map((category, index) => (
          <li key={index} className="webpage-sidebar-item">
            <i className={category.icon}></i>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};





const Sidebar = () => {
  const sidebarCategories = [
    { icon: 'fas fa-mobile-alt', name: 'Téléphone & Tablette' },
    { icon: 'fas fa-tv', name: 'TV & Hi Tech' },
    { icon: 'fas fa-laptop', name: 'Informatique' },
    { icon: 'fas fa-home', name: 'Maison, cuisine & bureau' },
    { icon: 'fas fa-blender', name: 'Électroménager' },
    { icon: 'fas fa-tshirt', name: 'Vêtements & Chaussures' },
    { icon: 'fas fa-heartbeat', name: 'Beauté & Santé' },
    { icon: 'fas fa-gamepad', name: 'Jeux vidéos & Consoles' },
    { icon: 'fas fa-tools', name: 'Bricolage' },
    { icon: 'fas fa-futbol', name: 'Sports & Loisirs' },
    { icon: 'fas fa-baby', name: 'Bébé & Jouets' },
    { icon: 'fas fa-ellipsis-h', name: 'Autres catégories' },
  ];

  

  return (
    <Side categories={sidebarCategories} />
  );
};

export default Sidebar;

