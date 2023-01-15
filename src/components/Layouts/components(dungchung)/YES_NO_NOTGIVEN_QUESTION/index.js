import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
const YesNoQuestions = ({questions, handleChange}) => {
    let startNumber = questions.from
    return (
        <div>
            <h3> Questions {questions.from}-{questions.to}</h3>
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
                        <th>NOT GIVEN</th>
                        <th>if it is impossible to say what the writer thinks about this</th>
                    </tr>
                </tbody>
            </table>
            
            
            {questions.listOfQuestions.map((item, index) => {
                return (
                    <div key={index}>
                        <NumberWrapInline number={startNumber}></NumberWrapInline>
                        <select className="answers" onChange={handleChange} id={startNumber++}>
                            <option></option>
                            <option>YES</option>
                            <option>NO</option>
                            <option>NOT GIVEN</option>
                        </select>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
export default YesNoQuestions