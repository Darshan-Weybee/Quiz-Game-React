import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Questions(){
    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [index , setIndex] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [right, setRight] = useState(0);
    const {amount,category,difficulty} = location.state;

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
        .then(res => setData(res.data.results))
    },[amount,category,difficulty])

    const btnHandle = (e) =>{
        if(e.target.textContent === data[index].correct_answer) setRight(ps => ps + 1);
        setAnswer(pst => [...pst, e.target.textContent])
        setIndex(pst => pst + 1);
    }

    const shuffleArray = (a, b) => {
        let arr = [];
        arr = [...a, b];
        for (let i = 0; i < arr.length; i++) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        data[index].arr = arr;
        return arr
    }

    if(data.length !== 0){
        return (
        index === Number(amount) ? navigate("/answers", {state: {data,answer, right}}) :
        <div className="Question flex">
            <div className="queNumber">Question {index+1}/{amount}</div>

            <div className="que">
                <div>{data[index].question}</div>
                <div className="option flex">
                    {shuffleArray(data[index].incorrect_answers,data[index].correct_answer).map(el => <button className="optionbtn" onClick={btnHandle}>{el}</button>)}
                </div>
            </div>
        </div>
        )
    }
    return null
    
}

export default Questions