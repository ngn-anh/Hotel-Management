import React,{useState} from "react";
import Header from "./components/Layout/Header";
import { Fragment } from "react";
import HomePage from "./components/UI/HomePage";
import Footer from "./components/Layout/Footer";
import BookNow from "./components/UI/BookNow";


function App() {
  const [isHomePage, setHomePage] = useState(true);
  function homeClick() {
    setHomePage(true)
  }
  function bookClick() {
    setHomePage(false)
  }
  return (
    <Fragment>
      <Header onHomeClick={homeClick} onBookClick={bookClick} currentPage={isHomePage}/>
      <main>
        { isHomePage ? <HomePage onBookClick={bookClick}/> : <BookNow />}
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
