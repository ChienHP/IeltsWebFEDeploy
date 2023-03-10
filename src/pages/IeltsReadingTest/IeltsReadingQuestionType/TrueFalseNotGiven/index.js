import NumberWrapInline from "../../../../components/Layouts/components(dungchung)/NumberWrapInline"
import { useState } from "react"
const TrueFalseNotGiven = ({questions, handleChoose}) => {
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
            <h3>Quesitons {questions.from}-{questions.to}</h3>

            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>TRUE</th>
                        <th>if the statement agrees with the information</th>
                    </tr>
                    <tr>
                        <th>FALSE</th>
                        <th>if the statement contradicts the information</th>
                    </tr>
                    <tr>
                        <th>NOT GIVEN</th>
                        <th>If there is no information on this</th>
                    </tr>
                </tbody>
            </table>

            {JSON.parse(questions.detail.listOfQuestions).map((item,index) => {
                return (
                    <div key={index}>
                        <NumberWrapInline number={startNumber++}></NumberWrapInline>
                        <select className="iot-question" value={answers[index] || ""} onChange={e=>handleChange(e.target.value, index)}>
                            <option></option>
                            <option>TRUE</option>
                            <option>FALSE</option>
                            <option>NOT GIVEN</option>
                        </select>
                        {item}
                    </div>
                )
            })}

        </div>
    )
}
export default TrueFalseNotGiven