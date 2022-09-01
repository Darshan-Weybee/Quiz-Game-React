import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Answers(){
    const location = useLocation();
    const navigate = useNavigate();
    const {data,answer, right} = location.state
    console.log(answer);
    return(
        <div className="Answer">
            <div className="qustionList">
                {
                    data.map((el,index) => {
                        return (
                        <div className="one">
                            <div className="singleQuestion">{index+1}.   {el.question}</div>
                            {
                                el.arr.map(ans => {
                                    if(ans === el.correct_answer) return <div style = {{color : "yellow"}} className="ansList">{ans}</div>
                                    return <div style = {ans === answer[index] ? {color : "red"} : {}} className="ansList">{ans}</div>
                                    
                                })
                            }
                        </div>
                        )
                    })
                }
            </div>

            <div className="score">You Scored <b>{right}</b> out of <b>{data.length}</b></div>

            <div className="resetParent"><button className="resetbtn" onClick={() => navigate("/")}>Reset Quiz</button></div>
        </div>
    )
}

export default Answers