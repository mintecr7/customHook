import { useState, useEffect } from "react";
import "./styles.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Hyperplexed = (prop: {text: string}) => {
  const main: string = prop.text;
  const [title, setTitle] = useState<string>(prop.text);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseOver = () => {
    let iteration = 0;
    if (main !== title) return;  
    if (intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      setTitle((prevTitle) =>
        prevTitle
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              letter
              return title[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= title.length) {
        clearInterval(id);
      }

      iteration += 1 / 3;
    }, 15);

    setIntervalId(id);
    if (!(main === title)){
      setTitle(main)
      console.log(main === title)
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    
      <h1 data-value={prop.text} onMouseOver={handleMouseOver}>
        {title}
      </h1>

   
    
  );
};

export default Hyperplexed;
