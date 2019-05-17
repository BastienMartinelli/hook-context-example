import React, { useState } from "react";

import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import store from "../store/";

const containerStyle = { margin: 50, textAlign: "center" };

function AddTodo() {
  const [value, setValue] = useState("");
  const [, dispatch] = store.useStore();

  function onSubmit(e) {
    e.preventDefault();

    if (value) {
      dispatch({
        type: "@TODO/TODO",
        payload: value
      });
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} style={containerStyle}>
        <TextField
          label="Todo name"
          value={value}
          onChange={e => setValue(e.target.value)}
          variant="outlined"
        />
        <Button
          style={{ margin: 10 }}
          variant="outlined"
          color="primary"
          type="submit"
        >
          ADD TODO 🚀
        </Button>
      </form>
      <Divider style={{ marginBottom: 50 }} />
    </>
  );
}

export default AddTodo;