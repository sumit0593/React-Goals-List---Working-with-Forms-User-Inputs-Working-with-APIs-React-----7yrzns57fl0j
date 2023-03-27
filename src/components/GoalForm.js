import React, { useState } from "react";

const GoalForm = (props) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });

    const handleInputChange=(event)=>{
      const{name,value}=event.target;
      setFormData((prevFormData)=>({
        ...prevFormData,
        [name]:value,
      }));
     };

     const handleSubmit=(event)=>{
      event.preventDefault();
      const newGoal={
        name:formData.goal,
        deadline:formData.by,
      };
      props.onAddGoal(newGoal);
      setFormData({goal:'',by:''});
     }
  
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal}
            onChange={handleInputChange}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={handleInputChange}
          />
          <button>Add</button>
        </form>
      </>
    )
}

export default GoalForm;