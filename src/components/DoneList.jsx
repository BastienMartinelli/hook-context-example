import React from "react";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

import TodoStore from "../store/";
import Todo from "./Todo";

function DoneList() {
  // Using the Consumer we can inject the state
  // and dispatch function
  return (
    <TodoStore.Consumer>
      {([state, dispatch]) => (
        <>
          <Typography align="center" variant="h5" component="h1">
            <Badge badgeContent={state.done.length} color="primary">
              DONE
            </Badge>
          </Typography>
          {state.done && state.done.length ? (
            state.done.map(t => (
              <Todo key={t} name={t} dispatch={dispatch} isDone />
            ))
          ) : (
            <Typography align="center">Aucune tache Faite</Typography>
          )}
        </>
      )}
    </TodoStore.Consumer>
  );
}

export default DoneList;
