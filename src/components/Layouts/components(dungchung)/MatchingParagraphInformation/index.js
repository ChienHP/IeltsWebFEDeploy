import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
const MatchingParagraphInformation = ({questions}) => {
    const alphabets = ['A','B','C','D','E','F']
    let startNumber = questions.from;

    return (
        <div>
            <h3>Questions {questions.from}-{questions.to}</h3>
            <em>Look at the following list of statements (Questions {questions.from}-{questions.to}) and the list of people below.</em>
            <em>Match each statement with the correct company.</em>
            <em>Write the correct letter 
                <strong> {alphabets[0]}-{alphabets[questions.listOfResearchers.length - 1]} </strong> 
                in boxes 
                <strong> {questions.from}-{questions.to} </strong>
                on your answer sheet.
            </em>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>List of Researchers</td>
                    </tr>
                </thead>
                <tbody>
                    {questions.listOfResearchers.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td><strong>{alphabets[index]}</strong></td>
                                <td>{item}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {questions.listOfStatements.map((item, index) => {
                return (
                    <div>
                        <NumberWrapInline number={startNumber++}></NumberWrapInline>
                        <select className="iot-question">
                            <option></option>
                            {questions.listOfResearchers.map((item,index) => {
                                return (
                                    <option key={index}>{alphabets[index]}</option>
                                )
                            })}
                        </select>
                        {item}
                    </div>

                )
            })}
        </div>
    )
}
export default MatchingParagraphInformation;