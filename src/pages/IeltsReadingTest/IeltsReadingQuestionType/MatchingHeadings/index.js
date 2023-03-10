import { useState } from "react"
import NumberWrapInline from "../../../../components/Layouts/components(dungchung)/NumberWrapInline"
import "./style.css"
const MatchingHeadings = ({questions, handleChoose}) => {
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

    let startNumber = questions.from
    return (
        <div>
            <h3>Questions {questions.from}-{questions.to}</h3>
            <em>Choose the correct heading for each paragraph from the list of headings below.</em>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of headings</th>
                    </tr>
                </thead>
                <tbody>
                    {JSON.parse(questions.detail.listOfHeadings).map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {JSON.parse(questions.detail.listOfParagraphs).map((item,index) => {
                return (
                    <div key={index}>
                        <NumberWrapInline number={startNumber++}></NumberWrapInline>
                        <select className="iot-question" value={answers[index] || ""} onChange={e=>handleChange(e.target.value, index)}>
                            <option></option>
                            {JSON.parse(questions.detail.listOfHeadings).map((item,index) => {
                                return (
                                    <option key={index}>{index+1}</option>
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
export default MatchingHeadings