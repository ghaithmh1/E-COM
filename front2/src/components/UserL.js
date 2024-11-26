import React, { useEffect, useState } from "react";

const UserL = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/user/");
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();
      setUsers(data.users); // Assuming the response has a 'users' field
    } catch (err) {
      setError("Error fetching user data.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete user request
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/user/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log("User deleted");
        // Refresh user list after deleting
        fetchUsers();
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array means it only runs on mount

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Access Level</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}> {/* Use user._id for the key */}
              <td>{user.firstName}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)} // Pass user._id to the delete function
                  className="btn btn-danger"
                  style={{ marginRight: '10px' }}
                >
                  Delete
                </button>
              </td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserL;
