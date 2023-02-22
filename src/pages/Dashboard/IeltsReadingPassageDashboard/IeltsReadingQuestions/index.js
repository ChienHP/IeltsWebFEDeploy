import axios from "axios"
import { useEffect, useState } from "react"
import { Collapse } from "react-bootstrap"
import { Question } from "./Question/Question"

export const IeltsReadingQuestions = ({passageId}) => {
    const [questions, setQuestions] = useState([])
    const [isOpen, setIsOpen] = useState([false, false, false])
    const handleOpen = (index) => {
        const newIsOpen = [...isOpen]
        newIsOpen[index] = !isOpen[index]
        setIsOpen(newIsOpen)
      };

    useEffect(() => {
        const fetchData = async (passageId) => {
            try {
                const res = await axios.get(`http://localhost:3001/ielts-reading-question/${passageId}/questions`)
                setQuestions(res.data)
            } catch (err) {
                console.log({err})
            }
        }
        fetchData(passageId)
    }, [])
    return (
        <div>
            {questions.map((question, index) => {
                return (
                    <div key={index}>
                        <button onClick={() => handleOpen(index)}>Questions {question.from} - {question.to}: {question.type}</button>
                        <Collapse in={isOpen[index]}>
                            <div>
                                <Question id={question.id}></Question>
                            </div>
                        </Collapse>
                    </div>
                )
            })}
        </div>
    )
}