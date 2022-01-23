import TodoList from "./components/TodoList/TodoList";
import { ToastContainer } from "react-toastify";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        style={{ zIndex: 9999999999 }}
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={false}
      />
      <TodoList />
    </div>
  );
}

export default App;
