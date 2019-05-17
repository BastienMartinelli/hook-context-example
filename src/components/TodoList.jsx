import React from "react";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

import todoStore from "../store/";
import Todo from "./Todo";

function TodoList() {
  // we can make use of the useStore hook to get
  // the state and the dispatch function
  const [{ todo }, dispatch] = todoStore.useStore();

  return (
    <>
      <Typography align="center" variant="h5" component="h1">
        <Badge badgeContent={todo.length} color="primary">
          TODO
        </Badge>
      </Typography>
      {todo && todo.length ? (
        todo.map(t => <Todo key={t} name={t} dispatch={dispatch} />)
      ) : (
        <Typography align="center">Aucune tache à faire</Typography>
      )}
    </>
  );
}

export default TodoList;
