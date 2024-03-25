"use client";

import {useState} from "react";

const CountUp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <p>{count}</p>
      <button
        className="border rounded p-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        count up
      </button>
    </div>
  );
};

export default CountUp;
