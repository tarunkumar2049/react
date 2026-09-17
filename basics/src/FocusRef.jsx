import { useRef } from "react";

export default function FocusRef() {
  const data = useRef(0);
  function handleFocus() {
    data.current.focus();
  }
  return (
    <div>
      <input ref={data} type="text" className="border rounded-2xl m-2" />
      <button onClick={handleFocus} className="bg-red-500 rounded-2xl px-2">
        Focus
      </button>
    </div>
  );
}
