import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const UserCard = ({
  userId,
  firstName,
  city,
  category,
  email,
  imageUser,
  onActionComplete, // Callback to notify parent of data refresh
}) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/user/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onActionComplete && onActionComplete(); // Notify parent to refresh data
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="card-deck">
      <div className="card">
        <img
          className="card-img-top"
          src={imageUser || '/default-avatar.png'} // Fallback to default image
          alt={`${firstName}'s avatar`}
        />
        <div className="card-body">
          <h5 className="card-firstName">{firstName}</h5>
          <p className="card-text">{email}</p>
          <p className="card-text">Category: {category || 'N/A'}</p>
          <p className="card-text">City: {city || 'N/A'}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={handleDelete}
            className="btn btn-danger"
            style={{ marginRight: '10px' }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  userId: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  city: PropTypes.string,
  category: PropTypes.string,
  email: PropTypes.string.isRequired,
  imageUser: PropTypes.string,
  onActionComplete: PropTypes.func,
};

export default UserCard;
