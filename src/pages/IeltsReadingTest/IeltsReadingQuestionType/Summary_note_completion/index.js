import { useState } from "react"
import NumberWrapInline from "../../../../components/Layouts/components(dungchung)/NumberWrapInline"
import "./style.css"
const SummaryNoteCompletion = ({questions, handleChoose}) => {
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
            <div>
                <em>Complete the summary.</em>
            </div>
            <div>
                <em>Choose  
                        <strong style={{color:"#ff0000",margin:"0px 4px 0px 4px"}}>
                            {questions.detail.require}
                        </strong> 
                     from the passage for each answer.
                </em>
            </div>

            <div>
                <em>Write your answers in boxes {questions.from}-{questions.to} on your answer sheet.</em>
            </div>
            <h4>{questions.detail.title}</h4>
            <div className="content">
                {JSON.parse(questions.detail.sumary).map((item,index) => {
                    return (
                        <span key={index}>
                            {item}
                            <NumberWrapInline number={startNumber}></NumberWrapInline>
                            <input className="answer" type="text" value={answers[index] || ""} onChange={e => handleChange(e.target.value, index)} id={startNumber++}></input>
                        </span>
                    )
                })}
                <span>{questions.detail.remaining}</span>
            </div>
        </div>
    )
}
export default SummaryNoteCompletion