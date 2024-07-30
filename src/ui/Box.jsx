import { useState } from "react";

function Box({ children }) {
  const [show, setshow] = useState(true);

  return (
    <div className="bg-slate-700 rounded-lg overflow-hidden relative">
      <button
        onClick={() => setshow((s) => !s)}
        className="bg-slate-500  font-semibold absolute right-5 top-2 text-[1rem] text-stone-100 cursor-pointer border-none h-6 w-6 rounded-full"
      >
        {show ? "-" : "+"}
      </button>
      {show && children}
    </div>
  );
}

export default Box;
