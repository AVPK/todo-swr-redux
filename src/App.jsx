import TodoList from "./features/todos/TodoList";
import { store } from './app/store';
import {Provider}  from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
