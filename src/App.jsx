import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskContext } from "./Context";
import Page from "./Page";
import { initialState, TaskReducer } from "./reducer/TaskReducer";

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <>
      <TaskContext.Provider value={{ state, dispatch }}>
        <Page />;
        <ToastContainer />
      </TaskContext.Provider>
      ;
    </>
  );
}

export default App;
