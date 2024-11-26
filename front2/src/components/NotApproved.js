import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import AdminCard from '../tools/AdminCard';

const NotApproved = () => {
  const [arr, setArr] = useState([]);

  const fetchAdverts = async () => {
    try {
      const response = await fetch('http://localhost:5000/advert/');
      const data = await response.json();

      // Filter adverts where delegation is not "yes"
      const filteredAdverts = data.adverts.filter(advert => advert.delegation !== 'yes');

      // Set the filtered adverts
      setArr(filteredAdverts);
    } catch (error) {
      console.error('Error fetching adverts:', error);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchAdverts();
  }, []);

  return (
    <section className="right-section flex" style={{ padding: '20px' }}>
      <h2 className="titlere">Not Approved Adverts</h2>
      {arr && arr.length > 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {arr.map(item => (
            <Grid item xs={12} sm={7} md={4} lg={3} key={item._id}>
              <AdminCard
                advertId={item._id}
                title={item.title}
                price={item.price}
                description={item.description}
                imageAdvert={item.imageAdvert?.[0]?.path || '/default-advert.png'} // Fallback to default image
                category={item.category}
                date={item.date}
                city={item.city || 'Unknown'}
                onActionComplete={fetchAdverts} // Refresh the list on action complete
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No adverts found in this category</p>
      )}
    </section>
  );
};

export default NotApproved;
