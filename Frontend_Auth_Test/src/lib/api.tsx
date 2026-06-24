import type { Task } from "../types/task";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(`${BASE_URL}/todos`);
  return res.json();
};

export const createTask = async (task: Omit<Task, "id" | "task_image">, image: File | null): Promise<Task> => {
  const formData = new FormData();
  formData.append("task_name", task.task_name);
  formData.append("task_type", task.task_type);
  formData.append("task_description", task.task_description);
  if (image) formData.append("task_image", image);

  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    body: formData, // no Content-Type header — browser sets multipart boundary automatically
  });
  return res.json();
};
