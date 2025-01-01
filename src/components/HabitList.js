import React, { useState } from 'react';
import './HabitList.css';

function HabitList({ habits, onAddHabit, onDeleteHabit, onToggleHabit }) {
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    onAddHabit({ name: newHabit, completed: false });
    setNewHabit('');
  };

  return (
    <div className='habit-list'>
      <input type='text' value={newHabit} onChange={(e) => setNewHabit(e.target.value)} placeholder='Add a new habit' />
      <button onClick={handleAddHabit}>Add</button>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} className={habit.completed ? 'completed' : ''}>
            {habit.name}
            <button onClick={() => onToggleHabit(index)}>{habit.completed ? 'Undo' : 'Complete'}</button>
            <button onClick={() => onDeleteHabit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;