import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserL = ({ onActionComplete }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/user/");
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (err) {
      setError("Error fetching user data.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/user/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Call the callback function after successful delete
        onActionComplete && onActionComplete(); // Notify parent component
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Access Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <span
                  className={`badge ${
                    user.access === "admin"
                      ? "bg-success"
                      : user.access === "manager"
                      ? "bg-warning"
                      : "bg-danger"
                  }`}
                >
                  {user.access === "admin" && "Admin"}
                  {user.access === "manager" && "Manager"}
                  {user.access === "user" && "User"}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)} // Pass the correct user ID
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UserL.propTypes = {
  onActionComplete: PropTypes.func, // Callback for parent to refresh data or handle actions
};

export default UserL;
