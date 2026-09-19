export default function Memo() {
  const memory = [1234567, 123456, 98765, 74185, 98546, 4513465, 98564];
  return (
    <div className="flex flex-col">
      <div>{memory.filter((item) => item > 100000)}</div> 
    </div>
  );
}
