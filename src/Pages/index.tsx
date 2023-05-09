import React, { useState } from 'react'
import styled from 'styled-components';
import { useIntl } from 'react-intl'

import useJoke from './useJokes';
import useLanguageStore from '@/store/language';


const Jokes = () => {
  const [input, setInput] = useState<number | undefined>(undefined);
  const {joke, getJoke} = useJoke();
  const { language, 
      setLanguage } = useLanguageStore()
 
  const {formatMessage }= useIntl()
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(parseInt(event.target.value));
  };
  
  const ChangeLan = () =>{
    if (language === 'en'){
      setLanguage('ko')
    }
    else {
      setLanguage('en')
    }
  }
  

  const handleSubmit = () => {
    if (input) {
      getJoke(input);
    } else {
      setInput(undefined);
      getJoke();
    }
  };
  
  

  return (
    <div>
      <GetJoke>
        <Input
          type="number"
          min="1"
          max="5"
          placeholder={formatMessage({ id : "input"})}
          onChange={handleChange}
          />
        <Button onClick={handleSubmit}>{formatMessage({ id : "get joke"})}</Button>
      </GetJoke>
      <Joke>
        <Text>{formatMessage({ id : "joke"})}</Text>
        <Text>
          {joke}
        </Text>
      </Joke>
    <Lang>

      <Button 
          onClick={ChangeLan}
          >{formatMessage({ id: "lan"})}</Button>
    </Lang>
    </div>
  );
}

export default Jokes

const Button = styled.button`
    border-radius: 4px;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid black;
    padding: 1rem 2rem;
    font-size: 1rem;
    background-size: 300%;
    transition: all 0.6s;
    width: 150px;
    height: 60px;
    color: black;
    background-image: linear-gradient(90deg, white 50%, black 50%);
    &:hover {
        color: #fff;
        background-position: 100%;
        transform: translateX(0.5rem);
    }
    &:active {
        transform: translate(0.5rem, 0.5rem);
        box-shadow: 0px 10px 20px -15px rgba(0, 0, 0, 0.75);
      }

`

const GetJoke = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;  
  align-items:center;
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: white;
  border: none;
  border-radius: 3px;
  width: 200px;
  height: 50px;
  font-size: 1rem;
`;
const Joke = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  align-items: center;
`
const Text = styled.h3`
  font-size: 1.6rem;
  text-align: left;
`
const Lang = styled.div`
  display: flex;
  justify-content: right;
`