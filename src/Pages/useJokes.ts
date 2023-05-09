import { useState, useEffect, useCallback } from 'react';


interface Jokes {
  [key: number]: string;
}

const jokes: Jokes = {
  1: 'Why can you never trust spiders? Because they post stuff on the web.',
  2: 'Where do computers go to dance? The disk-o',
  3: 'Why did the computer sneeze? It had a virus.',
  4: 'What is an alien’s favorite place on a computer? The space bar.',
  5: 'What did the computer do at lunchtime? Had a byte.',
};

const useJoke = (num?: number) =>{
    // const Num: number = num
    const [joke, setJoke] = useState<string>('');

    const getJoke = useCallback((num?: number) => {
        // console.log("far")
      if (num === undefined) {
        const randomIndex: number = Math.floor(Math.random() * Object.keys(jokes).length) + 1;
        setJoke(jokes[randomIndex]);
      } else if (num >= 1 && num <= 5) {
        setJoke(jokes[num]);
      } else {
        setJoke('Invalid input. Please enter a number between 1 and 5.');
      }
    }, []);
  
    useEffect(() => {
      getJoke(num);
    }, [getJoke, num]); 
  
    return {joke, getJoke};
}

export default useJoke;
