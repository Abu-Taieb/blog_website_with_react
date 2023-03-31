import React, { useState } from 'react';
import Header from './Component/Header/Header';
import Card from './Component/Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleBookmark = () => {
    toast("Already Bookmarked!");
  }


  return (
    <div>
      <Header></Header>
      <Card handleReadTime={handleReadTime} readTime={readTime} handleBookmark={handleBookmark}></Card>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;