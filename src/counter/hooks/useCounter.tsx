import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    // if (counter > 0){
    //     setCounter(counter - 1);
    // }
    setCounter((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // Values
    counter,

    // Methods / Actions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
