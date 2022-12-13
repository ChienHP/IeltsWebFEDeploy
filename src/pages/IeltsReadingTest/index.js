import MatchingHeadings from '../../components/Layouts/components(dungchung)/MatchingHeadings'
import MatchingParagraphInformation from '../../components/Layouts/components(dungchung)/MatchingParagraphInformation'
import SentenceCompletion from '../../components/Layouts/components(dungchung)/SentenceCompletion'
import SummaryNoteCompletion from '../../components/Layouts/components(dungchung)/Summary_note_completion'
import YesNoQuestions from '../../components/Layouts/components(dungchung)/YES_NO_NOTGIVEN_QUESTION'
import './style.css'

const question1_5 = {
    name: '1-5',
    type: 3,
    // numberOfQuestions: 5,
    questions: [
        {
            questionNumber: 1,
            content: "The appearance of the platypus caused experts to doubt it was real.",
            answer: "NO"
        },
        {
            questionNumber: 2,
            content: "The amount of venom in a male platypus changes during the year.",
            answer: "YES"
        },
        {
            questionNumber: 3,
            content: "Most platypus live in Eastern Australia.",
            answer: "NOT GIVEN"
        },
        {
            questionNumber: 4,
            content: "Snake venom and platypus venom are very similar.",
            answer: "NOT GIVEN"
        },
        {
            questionNumber: 5,
            content: "Because their environment is specialised, platypus cannot be kept as pets.",
            answer: "YES"
        }
    ]

}

const question6_9 = {
    name: "6-9",
    type: 9,
    require: "NO MORE THAN THREE WORDS",
    title: "Male and Female Platypus",
    questions: [
        {
            questionNumber: 6,
            content: "Platypus are unique Australian animals. Although all platypus   share many similarities, the male and female are somewhat different from each other. For example, on the hind feet, the male has a"
            
        },
        {
            questionNumber: 7,
            content: "while the young female has"
        },
        {
            questionNumber: 8,
            content: ". In the"
            
        },
        {
            questionNumber: 9,
            content: "the mother keeps her eggs warm and, once born, supplies her"
        }
    ],
    remaining: ". On the other hand, the male platypus does not help raise the young at all."
}

const question10_13 = {
    name: "10-13",
    type: "8",
    require: "NO MORE THAN THREE WORD",
    questions: [
        {
            questionNumber: 10,
            content: "Even though the platypus is not endangered, _ it is considered",
        },
        {
            questionNumber: 11,
            content: "Platypus numbers in",
            remaining: "areas have declined in many _ catchments."
        },
        {
            questionNumber: 12,
            content: "Even though the platypus is _ not endangered, it is considered",
        },
        {
            questionNumber: 13,
            content: "Platypus captivity for research _ and study purposes requires a",
        },
    ]
}

const question14_18 = {
    from:14,
    to: 18,
    type: 10,
    listOfHeadings: [
        "Research into short periods of sleep",
        "Famous people, short sleepers",
        "Measuring sleep movement",
        "Sleep experiments over the past century",
        "Monitoring the effects of sleep deprivation",
        "Antarctic and Arctic sleep means quality sleep",
        "Challenging research in reduced normal sleeping hours",
        "Are we getting enough sleep?",
        "The impact of noise on sleep",
        "Sleep experiments in an isolated area",
    ],
    listOfParagraph:[
        "Paragraph B",
        "Paragraph C",
        "Paragraph D",
        "Paragraph E",
        "Paragraph F",
    ]
}

const question19_23 = {
    from: 19,
    to: 23,
    type: 5,
    listOfResearchers:[
        "David Joske",
        "Stanley Limpton",
        "Tim Oswald",
        "Dr. Peter Suedfeld"
    ],
    listOfStatements:[
        "People need to increase their average amount of sleep.",
        "Extended periods of no sleep causes serious health problems.",
        "Some need more sleep and others seem to get by with less sleep.",
        "The quality of sleep can be measured by an individual’s sleep activity.",
        "Most people need to sleep the same number of hours."
    ]
}


const IeltsReadingTest = () => {
    return (
        <div className="reading-box">
            <div className="split">

            </div>
            <div className="split">
                <YesNoQuestions questions = {question1_5}></YesNoQuestions>
                <SummaryNoteCompletion questions={question6_9}></SummaryNoteCompletion>
                <SentenceCompletion questions={question10_13}></SentenceCompletion>
                <MatchingHeadings questions={question14_18}></MatchingHeadings>
                <MatchingParagraphInformation questions={question19_23}></MatchingParagraphInformation>
            </div>

        </div>
    )
}
export default IeltsReadingTest