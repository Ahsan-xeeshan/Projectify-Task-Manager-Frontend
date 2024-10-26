import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "./Context";
import CreateTaskModal from "./taskBoard/CreateTaskModal";
import DoneTask from "./taskBoard/DoneTask";
import Header from "./taskBoard/Header";
import OnProgress from "./taskBoard/OnProgress";
import ReviseTask from "./taskBoard/ReviseTask";
import TaskAction from "./taskBoard/TaskAction";
import ToDo from "./taskBoard/ToDo";

const Board = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [displayedTasks, setDisplayedTasks] = useState(state.taskData);

  const [isAscendingTodo, setIsAscendingTodo] = useState(false);
  const [isAscendingInProgress, setIsAscendingInProgress] = useState(false);
  const [isAscendingDone, setIsAscendingDone] = useState(false);
  const [isAscendingRevised, setIsAscendingRevised] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      dispatch({
        type: "ADD_TO_TASK",
        payload: {
          ...newTask,
        },
      });
      setDisplayedTasks([...displayedTasks, newTask]);
      toast.success("Task added successfully.", {
        position: "bottom-right",
      });
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: newTask,
      });
      setDisplayedTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === newTask.id ? newTask : task))
      );
      toast.success("Task edited successfully.", {
        position: "bottom-right",
      });
    }
    handleModalClose();
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: taskId,
    });
    setDisplayedTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
    toast.success("Task deleted successfully.", {
      position: "bottom-right",
    });
  };

  const toggleSortOrder = (category) => {
    switch (category) {
      case "todo":
        setIsAscendingTodo((prev) => !prev);
        break;
      case "inprogress":
        setIsAscendingInProgress((prev) => !prev);
        break;
      case "done":
        setIsAscendingDone((prev) => !prev);
        break;
      case "revise":
        setIsAscendingRevised((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const sortedTaskData = (category, isAscending) => {
    return displayedTasks
      .filter((item) => item.category === category)
      .sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return isAscending ? dateA - dateB : dateB - dateA;
      });
  };

  function handleSearch(searchTerm) {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm === "") {
      setDisplayedTasks(state.taskData);
    } else {
      const filtered = state.taskData.filter((task) =>
        task.taskName.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
      );
      setDisplayedTasks(filtered);
    }
  }

  return (
    <>
      {showModal && (
        <CreateTaskModal
          onClose={handleModalClose}
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header onSearch={handleSearch} />
        <div className="mx-auto max-w-7xl p-6">
          <TaskAction onAddClick={() => setShowModal(true)} />
          <div className="-mx-2 mb-6 flex flex-wrap">
            <ToDo
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onSort={() => toggleSortOrder("todo")}
              sortedTasks={sortedTaskData("todo", isAscendingTodo)}
            />
            <OnProgress
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onSort={() => toggleSortOrder("inprogress")}
              sortedTasks={sortedTaskData("inprogress", isAscendingInProgress)}
            />
            <DoneTask
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onSort={() => toggleSortOrder("done")}
              sortedTasks={sortedTaskData("done", isAscendingDone)}
            />
            <ReviseTask
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onSort={() => toggleSortOrder("revised")}
              sortedTasks={sortedTaskData("revised", isAscendingRevised)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
