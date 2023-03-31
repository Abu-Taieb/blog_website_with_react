import React, { useState } from 'react';
import Header from './Component/Header/Header';
import Card from './Component/Card/Card';

const App = () => {
  const [readTime, setReadTime] = useState()
  const handleReadTime = (time, title) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
    const previousReadTitle = JSON.stringify(localStorage.getItem('readId'));
    console.log(previousReadTitle, previousReadTime);

    if(previousReadTime){
      const sum = previousReadTime + time;
      localStorage.setItem('readTime', sum)
      setReadTime(sum)
    }else{
      localStorage.setItem('readTime', time);
      localStorage.setItem('readId', title);
      setReadTime(time, title)
    }

  }
  return (
    <div>
      <Header></Header>
      <Card handleReadTime={handleReadTime} readTime={readTime}></Card>
    </div>
  );
};

export default App;