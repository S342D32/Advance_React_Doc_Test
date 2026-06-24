import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createTask, getTasks } from "../lib/api";
import type { Task } from "../types/task";
const TaskAdd = () => {
  const [task, setTask] = useState({
    task_name: "",
    task_type: "",
    task_description: "",
  });
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);
  const [pagination, setPagination] = useState({
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 5,
  });
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState<"ASC" | "DESC">("ASC");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createTask(task, image);
      if (res.task) {
        toast.success("Task created!");
        setTask({ task_name: "", task_type: "", task_description: "" });
        setImage(null);
        fetchTasks(currentPage);
      }
    } catch (error) {
      toast.error("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async (page: number) => {
    try {
      const res = await getTasks(page, limit, sortBy, order);
      setTaskList(res.data ?? []);
      setPagination(res.pagination);
    } catch (err) {
      console.log(err);
      setTaskList([]);
    }
  };
  useEffect(() => {
    fetchTasks(currentPage);
  }, [currentPage, sortBy, order]);

  return (
    <>
      <div className="font-bold">Add Task</div>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Create New Task
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />

                {image && (
                  <div className="mt-3">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="preview"
                      className="w-32 h-32 object-cover rounded-lg border"
                    />
                    <p className="text-sm text-gray-500 mt-2">{image.name}</p>
                  </div>
                )}
              </div>

              {/* Task Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Name
                </label>

                <input
                  type="text"
                  placeholder="Enter task name"
                  value={task.task_name}
                  onChange={(e) =>
                    setTask({
                      ...task,
                      task_name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Task Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Type
                </label>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={task.task_type === "home"}
                      onChange={() =>
                        setTask({
                          ...task,
                          task_type: task.task_type === "home" ? "" : "home",
                        })
                      }
                    />
                    <span>🏠 Home</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={task.task_type === "office"}
                      onChange={() =>
                        setTask({
                          ...task,
                          task_type:
                            task.task_type === "office" ? "" : "office",
                        })
                      }
                    />
                    <span>🏢 Office</span>
                  </label>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter task description..."
                  value={task.task_description}
                  onChange={(e) =>
                    setTask({
                      ...task,
                      task_description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Create Task"}
              </button>
            </form>
          </div>

          {/* Task List */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Task List</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {pagination.totalItems} Tasks
              </span>
            </div>

            {/* Sort Controls */}
            <div className="flex gap-3 mb-4">
              <select
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="id">Sort by ID</option>
                <option value="task_name">Sort by Name</option>
                <option value="task_type">Sort by Type</option>
                <option value="created_at">Sort by Date</option>
              </select>

              <select
                value={order}
                onChange={(e) => { setOrder(e.target.value as "ASC" | "DESC"); setCurrentPage(1); }}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
              </select>
            </div>

            <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2">
              {taskList.map((task) => (
                <div
                  key={task.id}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                >
                  {task.task_image && (
                    <img
                      src={task.task_image}
                      alt={task.task_name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}

                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {task.task_name}
                    </h3>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.task_type === "home"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {task.task_type}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">{task.task_description}</p>
                </div>
              ))}
            </div>
            <div className="mt-1">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                previous
              </button>{" "}
              <span>
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
              <button
                disabled={currentPage === pagination.totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskAdd;
