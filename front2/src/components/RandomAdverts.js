import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import AdvertCard from '../tools/AdvertCard';

const Random = () => {
  const [arr, setArr] = useState([]);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await fetch('http://localhost:5000/advert/');
        const data = await response.json();
  
        // Shuffle the adverts array
        const shuffledData = data.adverts.sort(() => Math.random() - 0.5);
        const randomAdverts = shuffledData.slice(0, 12); // Select up to 12 random adverts
  
        setAdverts(randomAdverts);
        setArr(randomAdverts);
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };
  
    fetchAdverts();
  }, []);
  
  return (
    <>
      
      <section className="right-section flex" style={{ padding: '20px' }}>
      <h2 className='titlere'>Random Publications</h2>
        {arr && arr.length > 0 ? (
          <Grid container spacing={2} justifyContent="center">
            {arr.map((item) => {
              const imagePath = item.imageAdvert && item.imageAdvert.length > 0 ? item.imageAdvert[0].path : '';

              return (
                <Grid item xs={12} sm={7} md={4} lg={3} key={item._id}>
                  <AdvertCard
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    imageAdvert={imagePath}
                    category={item.category}
                    city={item.city}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <p>No adverts found in this category</p>
        )}
      </section>
    </>
  );
};

export default Random;
