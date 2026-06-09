import { Suspense, use } from "react";

type Employee = {
  id: number;
  name: string;
  department: string;
  role: string;
  salary: number;
  location: string;
  joined: string;
};

const bigData: Employee[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: ["Alice Johnson", "Bob Smith", "Carol White", "David Brown", "Eva Green"][i % 5],
  department: ["Engineering", "Marketing", "Finance", "HR", "Design"][i % 5],
  role: ["Senior Dev", "Manager", "Analyst", "Designer", "Lead"][i % 5],
  salary: 50000 + (i * 731) % 70000,
  location: ["New York", "London", "Tokyo", "Berlin", "Sydney"][i % 5],
  joined: `202${i % 4}-${String((i % 12) + 1).padStart(2, "0")}-01`,
}));

// simulate a slow fetch with a Promise
function fetchEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => setTimeout(() => resolve(bigData), 2000));
}

const employeePromise = fetchEmployees();

function EmployeeTable() {
  const employees = use(employeePromise);
  return (
    <div className="overflow-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-900 text-white">
          <tr>
            {["ID", "Name", "Department", "Role", "Salary", "Location", "Joined"].map((h) => (
              <th key={h} className="px-4 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={emp.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 text-gray-400">{emp.id}</td>
              <td className="px-4 py-2 font-medium">{emp.name}</td>
              <td className="px-4 py-2">{emp.department}</td>
              <td className="px-4 py-2">{emp.role}</td>
              <td className="px-4 py-2 text-green-600">${emp.salary.toLocaleString()}</td>
              <td className="px-4 py-2">{emp.location}</td>
              <td className="px-4 py-2 text-gray-400">{emp.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-900 px-4 py-3 flex gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-700 rounded w-20 animate-pulse" />
        ))}
      </div>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex gap-4 px-4 py-3 border-t border-gray-100">
          {Array.from({ length: 7 }).map((_, j) => (
            <div key={j} className="h-3 bg-gray-200 rounded w-20 animate-pulse" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function SuspenseTest() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Suspense</h1>
      <p className="text-gray-500 text-sm mb-6">
        Table loads after a 2s simulated fetch — Suspense shows a skeleton until data is ready.
      </p>
      <Suspense fallback={<TableSkeleton />}>
        <EmployeeTable />
      </Suspense>
    </div>
  );
}
