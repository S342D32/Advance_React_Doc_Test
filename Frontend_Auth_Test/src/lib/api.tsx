import type { Task } from "../types/task";

const BASE_URL = import.meta.env.VITE_API_URL;

interface GetTasksResponse {
  message: string;
  data: Task[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
  };
}

interface CreateTaskResponse {
  message: string;
  task: Task;
}

export const getTasks = async (
  page = 1,
  limit = 10,
  sortBy = "id",
  order = "ASC",
): Promise<GetTasksResponse> => {
  // Construct the query string
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sortBy,
    order,
  });
  const res = await fetch(`${BASE_URL}/todos?${queryParams.toString()}`);
  return res.json();
};

export const createTask = async (
  task: Omit<Task, "id" | "task_image">,
  image: File | null,
): Promise<CreateTaskResponse> => {
  const formData = new FormData();
  formData.append("task_name", task.task_name);
  formData.append("task_type", task.task_type);
  formData.append("task_description", task.task_description);
  if (image) formData.append("task_image", image);

  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    body: formData,
  });
  return res.json();
};
