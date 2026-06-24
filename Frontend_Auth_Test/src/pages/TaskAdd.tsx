import { useState } from "react";
import toast from "react-hot-toast";
import { createTask } from "../lib/api";
const TaskAdd = () => {
  const [task, setTask] = useState({
    task_name: "",
    task_type: "",
    task_description: "",
  });
  const [image, setImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTask(task, image);
      toast.success("Task created!");
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  return (
    <>
      <div className="font-bold">Add Task</div>
      <div className="grid m-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 border rounded-lg border-gray-500">
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Task Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {image && (
                  <div>
                    <p>{image.name}</p>
                  </div>
                )}
              </div>
              <div>
                {" "}
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Task Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={task.task_name}
                  onChange={(e) =>
                    setTask({
                      ...task,
                      task_name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Task Type
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
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
                  Home
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={task.task_type === "office"}
                    onChange={() =>
                      setTask({
                        ...task,
                        task_type: task.task_type === "office" ? "" : "office",
                      })
                    }
                  />
                  Office
                </label>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Task Description
              </label>
              <input
                type="text"
                placeholder="Enter description"
                value={task.task_description}
                onChange={(e) =>
                  setTask({
                    ...task,
                    task_description: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="col-span-2 border rounded-lg border-gray-500">
          Hello
        </div>
      </div>
    </>
  );
};

export default TaskAdd;
