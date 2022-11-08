
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 10;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

  // { console.log(apikey) }

  return (

    <div>
      <center>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key='general' pageSize={pageSize} country="in" category='general' />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key='business' pageSize={pageSize} country="in" category='business' />}></Route>
            <Route exact path="/entrainment" element={<News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={pageSize} country="in" category='entertainment' />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key='health' pageSize={pageSize} country="in" category='health' />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key='science' pageSize={pageSize} country="in" category='science' />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key='sports' pageSize={pageSize} country="in" category='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={pageSize} country="in" category='technology' />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={pageSize} country="in" category='entertainment' />}></Route>
          </Routes>
        </BrowserRouter>
      </center>
    </div>




  )
}

export default App;