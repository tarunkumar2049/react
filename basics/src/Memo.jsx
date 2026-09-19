import { useMemo } from "react";

export default function Memo() {
  const memory = useMemo(() => {
    const data = [1234567, 123456, 98765, 74185, 98546, 4513465, 98564];
    return data;
  });
  console.log(memory);
  return (
    <div>
      <div>{memory.filter((item) => item > 1000000)}</div>
    </div>
  );
}
