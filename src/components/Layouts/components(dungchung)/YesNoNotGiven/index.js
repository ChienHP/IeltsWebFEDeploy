import { useState } from "react"
import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
export const YesNoNotGiven = ({questions, handleChoose}) => {
    let startNumber = questions.from
    return (
        <div>
            <h3> Questions {questions.from}-{questions.to}</h3>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>YES</th>
                        <th>if the statement agrees with the views of the writer</th>
                    </tr>
                    <tr>
                        <th>NO</th>
                        <th>if the statement contradicts the views of the writer</th>
                    </tr>
                    <tr>
                        <th>NOT GIVEN</th>
                        <th>if it is impossible to say what the writer thinks about this</th>
                    </tr>
                </tbody>
            </table>
            
            
            {JSON.parse(questions.detail.listOfQuestions).map((item, index) => {
                return (
                    <div key={index}>
                        <NumberWrapInline number={startNumber}></NumberWrapInline>
                        <select className="answers" onChange={(e) => handleChoose(questions.id, e, index)} id={startNumber++}>
                            <option></option>
                            <option>YES</option>
                            <option>NO</option>
                            <option>NOT GIVEN</option>
                        </select>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}