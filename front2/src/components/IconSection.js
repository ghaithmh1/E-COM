import * as React from 'react';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import AdvertCard from '../tools/AdvertCard';

const IconSection = () => {
  const [arr, setArr] = useState([]);
  const [adverts, setAdverts] = useState([]);
  const [category, setCategory] = useState('all'); // State to track the active category

  // Fetching Adverts Data from an API or source
  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await fetch('http://localhost:5000/advert/'); // Replace with your actual API endpoint
        const data = await response.json();
        setAdverts(data.adverts); // Assuming the data is an array of adverts
        setArr(data.adverts); // Initialize arr with the fetched data to show all adverts by default
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };
    fetchAdverts();
  }, []); // Empty dependency array to run only once on mount

  // Function to filter Adverts based on category
  const filterArray = (category) => {
    setCategory(category); // Set the active category
    if (category === 'all') {
      setArr(adverts); // Show all adverts when 'all' is selected
    } else {
      const newArray = adverts.filter((element) => element.category === category);
      setArr(newArray); // Filter adverts based on the selected category
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
        <Grid container spacing={4} justifyContent="center">
          {['all', 'clothes', 'vacation', 'jobs', 'cars', 'decoration', 'books'].map((cat) => (
            <Grid item key={cat}>
              <Button
                variant={category === cat ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => filterArray(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)} {/* Capitalize category name */}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>

      <section className="right-section flex" style={{ padding: '20px' }}>
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

export default IconSection;
