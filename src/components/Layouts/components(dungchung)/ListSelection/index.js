import { ALPHABETS } from "../../../../constants/common"

const ListSelection = ({questions}) => {
    return (
        <div>
            <h3>Questions {questions.from}-{questions.to}</h3>
            <em>{questions.question}</em>

            <ul className="list-question">
                {questions.listOfAnswers.map((item,index) => {
                    return (
                        <li key={index}>
                            <span className="lq-number">{ALPHABETS[index]}</span>
                            <input type="checkbox" style={{margin: "4px"}}></input>
                            {item}
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
export default ListSelection