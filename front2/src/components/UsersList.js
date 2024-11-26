import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import UserCard from '../tools/UserCard';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true); // Set loading state
    try {
      const response = await fetch('http://localhost:5000/user/');
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
      const data = await response.json();
      console.log(data);
      setUsers(data.users);
    } catch (err) {
      setError('Error fetching user data.');
      console.error(err);
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  return (
    <section className="right-section flex" style={{ padding: '20px' }}>
      <h2 className="titlere">Users List</h2>
      {error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading users...</p>
      ) : users && users.length > 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {users.map((item) => (
            <Grid item xs={12} sm={7} md={4} lg={3} key={item._id}>
              <UserCard
                userId={item._id}
                firstName={item.firstName}
                email={item.email}
                imageUser={item.imageUser?.[0]?.path || '/default-avatar.png'}
                category={item.category}
                city={item.city}
                onActionComplete={fetchUsers} // Refresh user list on action complete
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No users found</p>
      )}
    </section>
  );
};

export default UsersList;
