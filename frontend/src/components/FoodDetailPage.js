import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance'; // Ensure correct path
import { useParams } from 'react-router-dom';

function FoodDetailPage() {
  const { id } = useParams(); // Get the food item ID from the URL params
  const [foodItem, setFoodItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/food/${id}`) // Make API call using the food item ID
      .then((response) => {
        setFoodItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching food details:", error);
        setError(error.message);
      });
  }, [id]); // Run the effect when the ID changes

  return (
    <div>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : foodItem ? (
        <div>
          <h1>{foodItem.name}</h1>
          <p>{foodItem.description}</p>
          <p><strong>Price:</strong> ${foodItem.price}</p>
          <img src={foodItem.imageUrl} alt={foodItem.name} />
        </div>
      ) : (
        <p>Loading food details...</p>
      )}
    </div>
  );
}

export default FoodDetailPage; // Ensure this is the only export default
