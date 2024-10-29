import React, { useEffect, useState } from 'react';

interface Goal {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]); // Usa l'interfaccia Goal

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/goals');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Goal[] = await response.json(); // Tipizza i dati
        setGoals(data);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div>
      <h1>Obiettivi</h1>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
