import { useState } from "react"
import NumberWrapInline from "../../../../components/Layouts/components(dungchung)/NumberWrapInline"
import "./style.css"
const SentenceCompletion = ({questions, handleChoose}) => {
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
            <h3>
                Questions {questions.from}-{questions.to}
            </h3>
            <em>Complete the sentences below with words taken from Reading Passage 1.</em>
            <div>
                <em>Use 
                    <strong style={{color:"#ff0000",margin:"0px 4px 0px 4px"}}>
                        {questions.detail.require}
                    </strong> 
                    for each answer.</em>
            </div>
            <div>
                <em>
                    Write your answers in boxes {questions.name} on your answer sheet.
                </em>
            </div>
            <div className="sentences-completion">
                {JSON.parse(questions.detail.listOfSentences).map((item,index) => {
                    return (
                        <div key={index}>
                            {item.content}
                            <NumberWrapInline number={startNumber++}></NumberWrapInline>
                            <input className="answer" type="text" value={answers[index]} onChange={e => handleChange(e.target.value, index)}></input>
                            {item.remaining}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SentenceCompletion