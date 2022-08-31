import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Questions(){
    const [data, setData] = useState([]);
    const [index , setIndex] = useState(0);
    const location = useLocation();
    const [answer, setAnswer] = useState([]);
    const {amount,category,difficulty,type} = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
        .then(res => {console.log(res.data.results); setData(res.data.results)})
    },[])

    const btnHandle = (e) =>{
        console.log(e.target.textContent);
        setAnswer(pst => [...pst, e.target.textContent])
        if(index !== amount) setIndex(pst => pst + 1);
        if(index === amount-1) navigate("/answers", {state: "10"});

    }

    return(
        <div>
            Question {index}/{amount}
            <div>{data[index]?.question}</div>
            <div>
                <button onClick={btnHandle}>{data[index]?.correct_answer}</button>
                {data[index]?.incorrect_answers.map(el => <button onClick={btnHandle}>{el}</button>)}
            </div>
        </div>
    )
}

export default Questions