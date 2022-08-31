import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import Questions from './Questions';
import NoMatch from './NoMatch';
import Answers from './Answers';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='questions' element={<Questions/>}/>
      <Route path='/answers' element={<Answers/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
  )
}

export default App;
