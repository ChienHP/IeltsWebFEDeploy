import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
const SummaryNoteCompletion = ({questions}) => {
    return (
        <div>
            <h3>Questions {questions.name}</h3>
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
                <em>Write your answers in boxes {questions.name} on your answer sheet.</em>
            </div>

            <div className="content">
                {questions.questions.map((item,index) => {
                    return (
                        <span key={index}>
                            {item.content}
                            <NumberWrapInline number={item.questionNumber}></NumberWrapInline>
                            <input className="answer" type="text"></input>
                        </span>
                    )
                })}
                <span>{questions.remaining}</span>
            </div>
        </div>
    )
}
export default SummaryNoteCompletion