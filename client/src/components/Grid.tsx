import { useEffect, useState } from "react";

function Grid() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);
  return (
    <div className="flex h-screen w-full justify-center items-center bg-black">
      <div className="grid  grid-cols-4 gap-2 p-2 bg-white  ">
        {Array.from({ length: 16 }).map((_, index) => (
          <button
            onClick={(e) => console.log(index + 1)}
            key={index}
            className={
              visible
                ? "w-22 h-22  bg-purple-500 rounded-lg "
                : "w-22 h-22  bg-purple-400 rounded-lg animate-pulse"
            }
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Grid;
