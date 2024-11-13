import * as React from 'react';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
        if (Array.isArray(data)) {
          setAdverts(data); // Assuming the data is an array of adverts
          setArr(data); // Initialize arr with the fetched data to show all adverts by default
        } else {
          console.error('Data is not an array:', data);
        }
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
        <Grid container spacing={2} justifyContent="center">
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

      <section className="right-section flex">
        {arr && arr.length > 0 ? (
          arr.map((item) => {
            // Ensure imageAdvert is an array and contains an object with a path property
            const imagePath = item.imageAdvert && item.imageAdvert.length > 0 ? item.imageAdvert[0].path : '';

            return (
              <div className="card" key={item._id}>
                {imagePath ? (
                  <img width={266} src={imagePath} alt={item.title} />
                ) : (
                  <p>No image available</p> // Fallback if imagePath is not available
                )}
                <div style={{ width: '266px' }} className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">lorem ipsum</p>
                  <div className="flex icons">
                    <div style={{ gap: '11px' }} className="flex">
                      <div className="icon-link"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No adverts found in this category</p> // Display message if no adverts are found
        )}
      </section>
    </>
  );
};

export default IconSection;
