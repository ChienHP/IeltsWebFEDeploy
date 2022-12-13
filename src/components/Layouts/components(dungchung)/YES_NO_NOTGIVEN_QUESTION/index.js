import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
const YesNoQuestions = ({questions}) => {
    return (
        <div>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>YES</th>
                        <th>if the statement agrees with the views of the writer</th>
                    </tr>
                    <tr>
                        <th>NO</th>
                        <th>if the statement contradicts the views of the writer</th>
                    </tr>
                    <tr>
                        <th>YES</th>
                        <th>if it is impossible to say what the writer thinks about this</th>
                    </tr>
                </tbody>
            </table>
            
            
            {questions.questions.map((item, index) => {
                return (
                    <div key={index}>
                        <NumberWrapInline number={item.questionNumber}></NumberWrapInline>
                        <select className="answers">
                            <option></option>
                            <option>YES</option>
                            <option>NO</option>
                            <option>NOT GIVEN</option>
                        </select>
                        {item.content}
                    </div>
                )
            })}
        </div>
    )
}
export default YesNoQuestions