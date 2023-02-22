import { ALPHABETS } from "../../../../constants/common"
import NumberWrapInline from "../NumberWrapInline"

const MultipleChoice = ({questions}) => {
    return (
        <div>
            <h3>Question {questions.from}</h3>
            <NumberWrapInline number={questions.from}></NumberWrapInline>
            <em>{questions.question}</em>
            <ul className="list-question">
                {JSON.parse(questions.detail.listOfAnswers).map((item,index) => {
                    return (
                        <li key={index}>
                            <span className="lq-number">{ALPHABETS[index]}</span>
                            <input type="radio" style={{margin: "4px"}}></input>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MultipleChoice