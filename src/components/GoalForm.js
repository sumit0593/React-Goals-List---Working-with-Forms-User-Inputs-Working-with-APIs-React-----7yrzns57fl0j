import React, { useState } from "react";

const GoalForm = () => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
  
    return (
      <>
        <h1>My Goals</h1>
        <form>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
          />
          <button>Add</button>
        </form>
      </>
    )
}

export default GoalForm;