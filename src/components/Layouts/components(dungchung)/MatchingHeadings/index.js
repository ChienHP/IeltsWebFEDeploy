import NumberWrapInline from "../NumberWrapInline"
import "./style.css"
const MatchingHeadings = ({questions}) => {
    let startNumber = questions.from
    return (
        <div>
            <h3>Questions {questions.from}-{questions.to}</h3>
            <em>Choose the correct heading for each paragraph from the list of headings below.</em>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of headings</th>
                    </tr>
                </thead>
                <tbody>
                    {JSON.parse(questions.detail.listOfHeadings).map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {JSON.parse(questions.detail.listOfParagraphs).map((item,index) => {
                return (
                    <div key={index}>
                        <NumberWrapInline number={startNumber++}></NumberWrapInline>
                        <select className="iot-question">
                            <option></option>
                            {JSON.parse(questions.detail.listOfHeadings).map((item,index) => {
                                return (
                                    <option key={index}>{index+1}</option>
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
export default MatchingHeadings