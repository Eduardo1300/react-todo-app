import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// --- Thunk de ejemplo para traer tareas iniciales --------------
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
  // Adaptamos la estructura
  return data.map(t => ({
    id: t.id,
    text: t.title,
    completed: t.completed,
    createdAt: new Date().toLocaleString()
  }));
});
// --------------------------------------------------------------

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all', // all | pending | completed
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
