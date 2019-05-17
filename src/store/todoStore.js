import createStore from "../utils/createStore";

const initialState = {
  todo: ["manger", "dormir"],
  done: ["travailler"]
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "@TODO/TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
        done: state.done.filter(d => d !== action.payload)
      };
    case "@TODO/CLEAR_ALL":
      return {
        ...state,
        todo: []
      };
    case "@TODO/DELETE":
      return {
        ...state,
        todo: state.todo.filter(t => t !== action.payload),
        done: state.done.filter(d => d !== action.payload)
      };
    case "@TODO/DONE":
      return {
        ...state,
        todo: state.todo.filter(t => t !== action.payload),
        done: [...state.done, action.payload]
      };
    default:
      return state;
  }
};

export default createStore(todoReducer, initialState);
