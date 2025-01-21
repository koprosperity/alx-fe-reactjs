import useTaskStore from '../store/useTaskStore';

const TaskList = () => {
  const { tasks, removeTask, toggleTask } = useTaskStore();

  return (
    <ul className="list-none p-0">
      {tasks
        .sort((a, b) => a.completed - b.completed)
        .map((task) => (
          <li key={task.id} className="flex items-center mb-2 p-2 rounded bg-gray-100">
            <span
              className={`flex-grow ${task.completed ? 'line-through' : ''}`}
            >
              {task.title}
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-2 cursor-pointer"
            />
            <button
              onClick={() => removeTask(task.id)}
              className="bg-red-500 text-white rounded-md px-2 py-1"
            >
              Remove
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;