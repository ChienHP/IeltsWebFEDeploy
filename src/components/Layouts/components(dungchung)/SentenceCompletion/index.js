import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
const SentenceCompletion = ({questions}) => {
    return (
        <div>
            <h3>
                Questions {questions.name}
            </h3>
            <em>Complete the sentences below with words taken from Reading Passage 1.</em>
            <div>
                <em>Use 
                    <strong style={{color:"#ff0000",margin:"0px 4px 0px 4px"}}>
                        {questions.require}
                    </strong> 
                    for each answer.</em>
            </div>
            <div>
                <em>
                    Write your answers in boxes {questions.name} on your answer sheet.
                </em>
            </div>
            <div className="sentences-completion">
                {questions.questions.map((item,index) => {
                    return (
                        <div key={index}>
                            {item.content}
                            <NumberWrapInline number={item.questionNumber}></NumberWrapInline>
                            <input className="answer" type="text"></input>
                            {item.remaining}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SentenceCompletion