import React, { useState, useEffect } from "react";
import Title from "./Title";
import OutputScreen from "./OutputScreen";
import InputScreen from "./InputScreen";
import Buttons from "./Buttons";

export default function CalculatorContainer() {
    const [ question, setQuestion ] = useState("");
    const [ answer, setAnswer ] = useState("");
    const [ reset, setReset ] = useState("");

    let onBtnChange = (e) => {
        const value = e.target.value;
        let answer = "";
        let questionCheck = () => {
            try {
                // let reg =  /(\*\+)|(\*\/)|(\/\*)|(\/\+)|(-\/)|(-\*)|(-\+)|(\+\*)|(\+\/)/
                // let reg = /(\**\+*)|(\**\/*)|(\/*\**)|(\/*\+*)|(-*\/*)|(-*\**)|(-*\+*)|(\+*\**)|(\+*\/*)/
                let reg = /(\*+\+)|(\*+\/)|(\/+\*)|(\/+\+)|(-+\/)|(-+\*)|(-+\+)|(\++\*)|(\++\/)/
                    let result = reg.test(question.toString()) 
                    console.log("result",result)
                    if(result){
                        let match = reg.exec(question);
                        let op = match[0].slice(match[0].length - 1);
                        console.log(match)
                        console.log("match",match.input)
                        console.log("op", op)
                        let newQuestion = question.replace(/\D+/, op);
                        console.log("new",newQuestion)
                        answer = eval(newQuestion);
                        
                        setQuestion(answer);

                    }else{
                        answer = eval(question);
                        setQuestion(answer);
                    }
               
            } catch (error) {
                //do nothing
            }
        };

        switch (value) {
            case "=":
                setReset("");
                questionCheck();
                // setAnswer(answer);
                setQuestion(answer);
                break;

            case "C":
                setQuestion("");
                setAnswer("");
                setReset("0");

                break;

            case "del":
                if (!question) {
                    setReset("");
                }
                if (question) {
                    setQuestion(question.toString().substring(0, question.length - 1));
                }

                break;

            default:
                setReset("");
                if (question[0] == 0 && value == 0) {
                    setQuestion("");
                    setAnswer("");
                    setReset('');
                }else{
                  
                     
                    setQuestion((prevState) => {
                        return prevState + value;
                    });

                    
                    

                }

                break;
        }
    };

    let style = { color: "orange" };

    return (
        <div className="container-fluid">
            <div className="row ">
                <Title />
            </div>

            <div id="screen" className="row form-group ml-5 w-100">
                {/* <div className="row">
                    <OutputScreen label={answer} />
                </div> */}

                <div className="row">
                    {reset ? (
                        <InputScreen label={reset} />
                    ) : question ? (
                        <InputScreen label={question} />
                    ) : (
                        <InputScreen label={answer} />
                    )}
                </div>
            </div>

            <div id="btn-container" className="">
                <div className="row mb-1 ml-4">
                    <Buttons id="seven" handleClick={onBtnChange} label="7" />
                    <Buttons id="eight" handleClick={onBtnChange} label="8" />
                    <Buttons id="nine" handleClick={onBtnChange} label="9" />
                    <Buttons id="add" handleClick={onBtnChange} label="+" />
                </div>
                <div className="row mb-1 ml-4">
                    <Buttons id="four" handleClick={onBtnChange} label="4" />
                    <Buttons id="five" handleClick={onBtnChange} label="5" />
                    <Buttons id="six" handleClick={onBtnChange} label="6" />
                    <Buttons id="multiply" handleClick={onBtnChange} label="*" />
                </div>
                <div className="row mb-1 ml-4">
                    <Buttons id="one" handleClick={onBtnChange} label="1" />
                    <Buttons id="two" handleClick={onBtnChange} label="2" />
                    <Buttons id="three" handleClick={onBtnChange} label="3" />
                    <Buttons id="divide" handleClick={onBtnChange} label="/" />
                </div>
                <div className="row mb-1 ml-4">
                    <Buttons id="decimal" handleClick={onBtnChange} label="." />
                    <Buttons id="zero" handleClick={onBtnChange} label="0" />
                    <Buttons id="equals" handleClick={onBtnChange} label="=" />
                    <Buttons id="subtract" handleClick={onBtnChange} label="-" />
                </div>
                <div id="" className="row mb-1 ml-4" />
                <div id="last-btn-row" className="row mb-1 ml-4">
                    <Buttons handleClick={onBtnChange} label="del" />
                    <Buttons id="clear" handleClick={onBtnChange} label="C" />
                </div>
            </div>
        </div>
    );
}
