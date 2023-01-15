import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
const SummaryNoteCompletion = ({questions, handleChange}) => {
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
                            {questions.require}
                        </strong> 
                     from the passage for each answer.
                </em>
            </div>

            <div>
                <em>Write your answers in boxes {questions.from}-{questions.to} on your answer sheet.</em>
            </div>

            <div className="content">
                {questions.listOfQuestions.map((item,index) => {
                    return (
                        <span key={index}>
                            {item}
                            <NumberWrapInline number={startNumber}></NumberWrapInline>
                            <input className="answer" type="text" onChange={handleChange} id={startNumber++}></input>
                        </span>
                    )
                })}
                <span>{questions.remaining}</span>
            </div>
        </div>
    )
}
export default SummaryNoteCompletion