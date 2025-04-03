'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Composants d'icônes personnalisés
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const DualCarousel = () => {
  // États pour les carousels horizontal et vertical
  const [horizontalIndex, setHorizontalIndex] = useState(0);
  const [verticalIndices, setVerticalIndices] = useState([0, 0, 0, 0]);
  
  // Données pour le carousel
  const carouselData = [
    // Premier carousel horizontal
    {
      id: 'carousel-1',
      items: [
        { id: 'item-1-1', title: 'Projet My_cinema', text: 'Recréer un site de cinéma' },
        { id: 'item-1-2', image: 'https://i.postimg.cc/8k3gtYxh/cinema.png' },
        { id: 'item-1-3', textList: [
          'Gestion des bases de donnée',
          'Afficher des données venant de Mysql',
          'Modifier des données déjà existantes',
          'Ajouter et supprimer des données'
        ], },
      ]
    },
    // Deuxième carousel horizontal
    {
      id: 'carousel-2',
      items: [
        { id: 'item-2-1', title: 'Projet My_meetic', text: 'Recréer un site de rencontre' },
        { id: 'item-2-2', image: 'https://i.postimg.cc/rmZ26Zs2/mymeetic.png' },
        { id: 'item-1-3', textList: [
          'Gérer les données utilisateur',
          'Permettre aux utilisateurs de gérer leurs informations',
          'Permettre aux utilisateurs de voir les autres utilisateurs',
          'Hasher un mot de passe'
        ], },
      ]
    },
    // Troisième carousel horizontal
    {
      id: 'carousel-3',
      items: [
        { id: 'item-3-1', title: 'Projet Tweet_academy', text: 'Recréer Twitter'  },
        { id: 'item-3-2', image: 'https://i.postimg.cc/qv2rtGb2/twt.png' },
        { id: 'item-1-3', textList: [
          'Travailler sur un projet long terme et en équipe',
          'Gérer les requêtes AJAX et afficher une TL dynamique',
          'Produire un hashage plus complexe, notamment avec un salt',
          'Système de hashtag, de mention et de recherche de membre développé',
          'Créer un système de ticket complet'
        ], },
      ]
    },
    // Quatrième carousel horizontal
    {
      id: 'carousel-4',
      items: [
        { id: 'item-4-1', title: 'Projet Spotify', text: 'Recréer Spotify' },
        { id: 'item-4-2', image: 'https://i.postimg.cc/dtbvtfBq/spotify.png' },
        { id: 'item-1-3', textList: [
          'Gérer son temps et son équipe sur une période courte (3j)',
          'Travailler avec react et docker',
          'Gérer le système d\'api',
          'Créer des components et les intégrer convenablement'
        ], },
      ]
    },
  ];

  // Navigation horizontale
  const navigateHorizontal = (direction) => {
    if (direction === 'prev') {
      setHorizontalIndex((prev) => (prev > 0 ? prev - 1 : carouselData.length - 1));
    } else {
      setHorizontalIndex((prev) => (prev < carouselData.length - 1 ? prev + 1 : 0));
    }
  };

  // Navigation verticale pour un carousel spécifique
  const navigateVertical = (carouselIdx, direction) => {
    setVerticalIndices((prev) => {
      const newIndices = [...prev];
      const itemsLength = carouselData[carouselIdx].items.length;
      
      if (direction === 'prev') {
        newIndices[carouselIdx] = newIndices[carouselIdx] > 0 ? newIndices[carouselIdx] - 1 : itemsLength - 1;
      } else {
        newIndices[carouselIdx] = newIndices[carouselIdx] < itemsLength - 1 ? newIndices[carouselIdx] + 1 : 0;
      }
      
      return newIndices;
    });
  };

  // Dimensions personnalisables - MODIFIEZ CES VALEURS POUR CHANGER LES DIMENSIONS
  const carouselConfig = {
    width: "700px",        // Largeur de chaque panneau
    height: "500px",       // Hauteur de chaque panneau
    imageHeight: "70%",
    imageWidth: "50%",  // Hauteur des images
    gap: "20px",           // Espace entre les éléments
    padding: "16px"        // Padding interne
  };

  return (
    <div className="w-full mt-20 max-w-6xl mx-auto p-4">
      
      {/* Carousel horizontal */}
      <div className="relative overflow-hidden mb-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigateHorizontal('prev')}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
            aria-label="Précédent horizontal"
          >
            <ChevronLeft />
          </button>
          
          <div className="flex justify-center w-full px-12">
            {/* Un seul carousel visible à la fois */}
            <div 
              key={carouselData[horizontalIndex].id} 
              className="flex-shrink-0" 
              style={{ width: carouselConfig.width }}
            >
              {/* Carousel vertical */}
              <div 
                className="relative bg-transparent rounded-lg shadow-md overflow-hidden" 
                style={{ height: carouselConfig.height }}
              >
                {/* Conteneur des slides verticales avec transition */}
                <div
                  className="transition-transform duration-300 h-full"
                  style={{
                    transform: `translateY(-${verticalIndices[horizontalIndex] * 100}%)`,
                  }}
                >
                  {carouselData[horizontalIndex].items.map((item) => (
                    <div 
                      key={item.id} 
                      className="h-full flex flex-col" 
                      style={{ padding: carouselConfig.padding }}
                    >
                      {item.image && (
                        <div className="relative w-full mb-4" style={{ height: carouselConfig.imageHeight }}>
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, 700px"
                            className="object-cover rounded-md"
                            priority
                          />
                        </div>
                      )}
                      <div className="text-content">
                        <h3 className="ring-2 bg-[#17A2B8] text-white rounded-lg font-bold text-5xl mb-3 text-center">{item.title}</h3>
                        <p className="text-white pt-20 text-2xl leading-relaxed text-center">{item.text}</p>
                        {item.textList && (
                          <ul className="list-disc pl-5 text-2xl space-y-2 text-white">
                            {item.textList.map((listItem, index) => (
                              <li key={index} className="leading-relaxed">{listItem}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Contrôles verticaux */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                  <button
                    onClick={() => navigateVertical(horizontalIndex, 'prev')}
                    className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
                    aria-label="Précédent vertical"
                  >
                    <ChevronUp />
                  </button>
                  <button
                    onClick={() => navigateVertical(horizontalIndex, 'next')}
                    className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
                    aria-label="Suivant vertical"
                  >
                    <ChevronDown />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => navigateHorizontal('next')}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
            aria-label="Suivant horizontal"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DualCarousel;