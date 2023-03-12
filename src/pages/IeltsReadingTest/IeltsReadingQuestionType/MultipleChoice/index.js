import { ALPHABETS } from "../../../../constants/common"
import NumberWrapInline from "../../../../components/Layouts/components(dungchung)/NumberWrapInline"

const MultipleChoice = ({questions,handleChoose}) => {
    const handleChange = (answer) => {
        handleChoose({
            questionId: questions.id,
            answers: [answer]
        })
    }
    return (
        <div>
            <h3>Question {questions.from}</h3>
            <NumberWrapInline number={questions.from}></NumberWrapInline>
            <em>{questions.detail.question}</em>
            <ul className="list-question">
                {JSON.parse(questions.detail.listOfAnswers).map((item,index) => {
                    return (
                        <li key={index}>
                            <span className="lq-number">{ALPHABETS[index]}</span>
                            <input type="radio" name={questions.id} style={{margin: "4px"}} onChange={() => handleChange(ALPHABETS[index])}></input>
                            <label>{item}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MultipleChoice