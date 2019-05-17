import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const containerStyle = {
  margin: "auto",
  marginBottom: 20,
  marginTop: 20,
  width: 300
};

function Todo({ name, dispatch, isDone }) {
  const del = () => dispatch({ type: "@TODO/DELETE", payload: name });
  const done = () => dispatch({ type: "@TODO/DONE", payload: name });
  const todo = () => dispatch({ type: "@TODO/TODO", payload: name });

  return (
    <Card style={containerStyle}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={del}>
          Delete
        </Button>
        {!isDone && (
          <Button size="small" color="primary" onClick={done}>
            Mark as done
          </Button>
        )}
        {isDone && (
          <Button size="small" color="primary" onClick={todo}>
            Mark as todo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Todo;
