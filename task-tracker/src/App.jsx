import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Snackbar from './components/Snackbar';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Task Tracker</h1>
        <TaskForm />
        <TaskList />
        <Snackbar />
      </div>
    </div>
  );
};

export default App;