import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) =>{
  return (
  <Card className={classes.users}>
  <ul>
    {props.users.map((users) => {
      return(
      <li key={users.id}>{users.name} ({users.age} years old) </li>
      );
    })}

  </ul>
  </Card>
  )
}

export default UsersList;