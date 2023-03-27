import React from "react";

const ListOfGoals = (props) => {
    return (
      <ul>
        {props.goals.map((goal)=>(
          <li key={goal.name}>
            <p>My goal is to {goal.name}, by {goal.deadline}.</p>
          </li>
        ))}
      </ul>
    );
}

export default ListOfGoals;