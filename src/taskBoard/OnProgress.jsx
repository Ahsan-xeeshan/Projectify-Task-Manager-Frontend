/* eslint-disable react/prop-types */
import DeleteIcon from "../svgIcons/DeleteIcon";
import EditIcon from "../svgIcons/EditIcon";
import FilterIcon from "../svgIcons/FilterIcon";

const OnProgress = ({ onEdit, onDelete, onSort, sortedTasks }) => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            On Progress ({sortedTasks.length})
          </h3>
          <button onClick={onSort}>
            <FilterIcon />
          </button>
        </div>
        {sortedTasks.length > 0 ? (
          sortedTasks.map((task) => (
            <div key={task.id} className="mb-4 rounded-lg bg-gray-800 p-4">
              <div className="flex justify-between">
                <h4 className="mb-2 flex-1 font-semibold text-yellow-500">
                  {task.taskName}
                </h4>
                <div className="flex gap-2">
                  <button onClick={() => onDelete(task.id)}>
                    <DeleteIcon />
                  </button>
                  <button onClick={() => onEdit(task)}>
                    <EditIcon />
                  </button>
                </div>
              </div>
              <p className="mb-2 text-sm text-zinc-200">{task.description}</p>
              <p className="mt-6 text-xs text-zinc-400">
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(task.dueDate))}
              </p>
            </div>
          ))
        ) : (
          <div className="mb-4 rounded-lg bg-gray-800 p-4">
            <p>Task List is empty!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnProgress;
