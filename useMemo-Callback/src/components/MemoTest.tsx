import { useMemo, useRef, useState } from "react";

function WithoutMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  renderCount.current += 1;

  const total = (() => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) result += i;
    return result;
  })();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-red-500">Without useMemo</h2>
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
        <p className="text-sm text-gray-500">Render Count</p>
        <p className="text-4xl font-bold text-red-500">{renderCount.current}</p>
      </div>
      <p className="text-sm text-gray-400">Recalculates on every render</p>
      <div className="flex gap-2 items-center">
        <span className="text-sm">Count: {count}</span>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-red-400 text-white rounded-lg text-sm hover:bg-red-500"
        >
          Increment
        </button>
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here to trigger re-render..."
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
      />
      <p className="text-sm text-gray-600">Total: {total}</p>
    </div>
  );
}

function WithMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  const calcCount = useRef(0);
  renderCount.current += 1;

  const total = useMemo(() => {
    calcCount.current += 1;
    let result = 0;
    for (let i = 0; i < 100000000; i++) result += i;
    return result;
  }, [count]);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-green-500">With useMemo</h2>
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
        <p className="text-sm text-gray-500">Render Count</p>
        <p className="text-4xl font-bold text-green-500">{renderCount.current}</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
        <p className="text-sm text-gray-500">Calculation Count</p>
        <p className="text-4xl font-bold text-blue-500">{calcCount.current}</p>
      </div>
      <p className="text-sm text-gray-400">Recalculates only when count changes</p>
      <div className="flex gap-2 items-center">
        <span className="text-sm">Count: {count}</span>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600"
        >
          Increment
        </button>
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here — no recalculation!"
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
      />
      <p className="text-sm text-gray-600">Total: {total}</p>
    </div>
  );
}

function MemoTest() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">useMemo</h1>
      <p className="text-gray-500 text-sm mb-6">
        Type in the input or click Increment to see the difference.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <WithoutMemo />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <WithMemo />
        </div>
      </div>
    </div>
  );
}

export default MemoTest;
