import React, { useState } from 'react';
import Header from './Component/Header/Header';
import Card from './Component/Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [readTime, setReadTime] = useState()
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
    if(previousReadTime){
      const sum = previousReadTime + time;
      localStorage.setItem('readTime', sum)
      setReadTime(sum)
    }else{
      localStorage.setItem('readTime', time);
      setReadTime(time)
    }
  }


  // Bookmark Button 
  const handleBookmark = ({id}) => {
      toast("Already Bookmarked!");
      console.log(id);
  }

  return (
    <div>
      <Header></Header>
      <Card 
      handleReadTime={handleReadTime}
      readTime={readTime}
      handleBookmark={handleBookmark}
       ></Card>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;