// src/components/KanbanBoard.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(data)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="kanban-board">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.length === 0 ? (
            <p>No data available</p>
          ) : (
            data.tickets.map((item) => (
              <Card key={item.id} title={item.id} description={item.title} />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default KanbanBoard;
