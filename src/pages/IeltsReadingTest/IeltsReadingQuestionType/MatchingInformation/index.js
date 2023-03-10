import NumberWrapInline from "../../../../components/Layouts/components(dungchung)/NumberWrapInline"
import "./style.css"
import { ALPHABETS } from "../../../../constants/common"
import { useState } from "react"
export const MatchingInformation = ({questions, handleChoose}) => {
    const [answers, setAnswers] = useState([])
    const handleChange = (answer, index) => {
        const newAnswers = [...answers]
        newAnswers[index] = answer
        setAnswers(newAnswers)
        handleChoose({
            questionId: questions.id,
            answers: newAnswers
        })
    }
    let startNumber = questions.from;
    return (
        <div>
            <h3>Questions {questions.from}-{questions.to}</h3>
            <em>Look at the following list of statements (Questions {questions.from}-{questions.to}) and the list of people below.</em>
            <em>Match each statement with the correct company.</em>
            <em>Write the correct letter 
                <strong> {ALPHABETS[0]}-{ALPHABETS[JSON.parse(questions.detail.listOfObjects).length - 1]} </strong> 
                in boxes 
                <strong> {questions.from}-{questions.to} </strong>
                on your answer sheet.
            </em>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>List of Objects</td>
                    </tr>
                </thead>
                <tbody>
                    {JSON.parse(questions.detail.listOfObjects).map((item, index) => {
                        return (
                            <tr key={index}>
                                <td><strong>{ALPHABETS[index]}</strong></td>
                                <td>{item}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {JSON.parse(questions.detail.listOfStatements).map((item, index) => {
                return (
                    <div key={index}>
                        <NumberWrapInline number={startNumber++}></NumberWrapInline>
                        <select className="iot-question" value={answers[index] || ""} onChange={e=>handleChange(e.target.value, index)}>
                            <option></option>
                            {JSON.parse(questions.detail.listOfObjects).map((item,index) => {
                                return (
                                    <option key={index}>{ALPHABETS[index]}</option>
                                )
                            })}
                        </select>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}