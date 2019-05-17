import React from "react";

import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TodoStore from "./store/";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <TodoStore.Provider>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            No Redux TODO list 😍
          </Typography>
        </Toolbar>
      </AppBar>
      <AddTodo />
      <Grid container justify="center">
        <Grid item xs={6}>
          <TodoList />
        </Grid>
        <Grid item xs={6}>
          <DoneList />
        </Grid>
      </Grid>
    </TodoStore.Provider>
  );
}

export default App;
