import type { Task } from "../types/task";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(`${BASE_URL}/todos?_limit=5`);
  return res.json();
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};
