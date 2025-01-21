const useTaskStore = create((set) => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    addTask: (task) => {
      set((state) => {
        const updatedTasks = [...state.tasks, task];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
      });
    },
    // Update removeTask and toggleTask similarly to persist changes.
  }));