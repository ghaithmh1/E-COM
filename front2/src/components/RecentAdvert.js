import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import AdvertCard from './AdvertCard';

const Recent = () => {
  const [arr, setArr] = useState([]);
  const [adverts, setAdverts] = useState([]);

  // Fetching Adverts Data from an API or source
  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await fetch('http://localhost:5000/advert/'); 
        const data = await response.json();
        const sortedData = data.adverts
          .sort((a, b) => new Date(b.date) - new Date(a.date)) 
          .slice(0, 12); 
        setAdverts(sortedData);
        setArr(sortedData);
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };
    fetchAdverts();
  }, []); 
  return (
    <>
      <h2>Most Recent Publications</h2>
      <section className="right-section flex" style={{ padding: '20px' }}>
        {arr && arr.length > 0 ? (
          <Grid container spacing={2} justifyContent="center">
            {arr.map((item) => {
              const imagePath = item.imageAdvert && item.imageAdvert.length > 0 ? item.imageAdvert[0].path : '';

              return (
                <Grid item xs={12} sm={8} md={6} lg={4} key={item._id}>
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

export default Recent;
