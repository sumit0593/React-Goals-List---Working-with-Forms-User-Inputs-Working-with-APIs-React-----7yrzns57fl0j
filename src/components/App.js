import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);

  const handleAddGoal=(newGoal)=>{
    setAllGoals((prevGoals)=>[...prevGoals,newGoal]);
  }

  return (
    <div id="main">
      <GoalForm onAddGoal={handleAddGoal}/>
      <ListOfGoals goals={allGoals} />
    </div>
  )
  
}


export default App;
