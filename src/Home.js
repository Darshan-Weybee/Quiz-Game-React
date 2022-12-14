import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Questions from './Questions';

function Home() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`)
    .then(res => {
      setCategories(res.data.trivia_categories)})
  }, [])

  return (
    <div className="App">

      <h1>Quiz Game</h1>
      <div className='amount flex'>
        <label className='label'>Number Of Questions</label>
        <input type="text" value = {amount} onChange={(e) => setAmount(e.target.value)}/>
      </div>

      <div className='category flex'>
        <label className='label'>Select Category:</label>
        <select className='select' onChange={(e) => setCategory(e.target.value)}>
          <option id='0'>Any Category</option>
          {
            categories.map(cd => <option key={cd.id} value={cd.id}>{cd.name}</option>)
          }
        </select>
      </div>

      <div className='difficulty flex'>
        <label className='label'>Select Difficulty:</label>
        <select className='select' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className='startParent'>
          <button className='startbtn' onClick={() => navigate("questions", {state : {amount,category,difficulty}})}>Start Quiz</button>
      </div>
    </div>
  );
}

export default Home;
