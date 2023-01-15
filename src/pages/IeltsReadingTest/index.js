import { useEffect, useState } from 'react'
import ListSelection from '../../components/Layouts/components(dungchung)/ListSelection'
import MatchingHeadings from '../../components/Layouts/components(dungchung)/MatchingHeadings'
import MatchingParagraphInformation from '../../components/Layouts/components(dungchung)/MatchingParagraphInformation'
import MultipleChoice from '../../components/Layouts/components(dungchung)/MultipleChoice'
import SentenceCompletion from '../../components/Layouts/components(dungchung)/SentenceCompletion'
import SummaryNoteCompletion from '../../components/Layouts/components(dungchung)/Summary_note_completion'
import TrueFalseNotGiven from '../../components/Layouts/components(dungchung)/TrueFalseNotGiven'
import YesNoQuestions from '../../components/Layouts/components(dungchung)/YES_NO_NOTGIVEN_QUESTION'
import './style.css'

// type:12
const question1_5 = {
    from: 1,
    to: 5,
    type: 12,
    listOfQuestions: [
        "The appearance of the platypus caused experts to doubt it was real.",
        "The amount of venom in a male platypus changes during the year.",
        "Most platypus live in Eastern Australia.",
        "Snake venom and platypus venom are very similar.",
        "Because their environment is specialised, platypus cannot be kept as pets.",
    ]
}

// type: 9
const question6_9 = {
    from:6,
    to:9,
    type: 9,
    require: "NO MORE THAN THREE WORDS",
    title: "Male and Female Platypus",
    listOfQuestions: [
        "Platypus are unique Australian animals. Although all platypus   share many similarities, the male and female are somewhat different from each other. For example, on the hind feet, the male has a",
        "while the young female has",
        ". In the",
        "the mother keeps her eggs warm and, once born, supplies her"
    ],
    remaining: ". On the other hand, the male platypus does not help raise the young at all."
}

// type: 8
const question10_13 = {
    from: 10,
    to: 13,
    type: 8,
    require: "NO MORE THAN THREE WORD",
    listOfQuestions: [
        {
            content: "Even though the platypus is not endangered, it is considered",
            remaining: "."
        },
        {
            content: "Platypus numbers in",
            remaining: "areas have declined in many catchments."
        },
        {
            content: "Even though the platypus is not endangered, it is considered",
            remaining: "."
        },
        {
            content: "Platypus captivity for research and study purposes requires a",
            remaining: "."
        },
    ]
}

// type: 10
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
    listOfParagraphs:[
        "Paragraph B",
        "Paragraph C",
        "Paragraph D",
        "Paragraph E",
        "Paragraph F",
    ]
}

// type: 5
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

// type: 15
const questions24_25 = {
    from:24,
    to:25,
    type:15,
    question: "The list below lists some health issues associated with lack of sleep. Which TWO of these health issues are mentioned by the writer?",
    listOfAnswers: [
        "heart problems",
        "nervous disorders",
        "dizziness",
        "depression",
        "problems with mental state",
        "increased blood pressure"
    ]
}

// type: 6
const question26 = {
    from: 26,
    to: 26,
    type: 6,
    question: "Which of the following is the most suitable title for Reading Passage 2?",
    listOfAnswers: [
        "The imprtance of sleep",
        "Studies in sleep",
        "How much sleep we need",
        "The effect of sleep patterns",
        "Modern perspectives on sleep"
    ]
}
const question27 = {
    from: 27,
    to: 27,
    type: 6,
    question: "As a method of obtaining fresh water, fog",
    listOfAnswers: [
        "forms best when the air is dry",
        "is easier to collect than dew",
        "is being tried in a large-scale way in Senegal",
        "is not easy to collect"
    ]
}
const question28 = {
    from: 28,
    to: 28,
    type: 6,
    question: "Small-scale 'greenhouse effect' desalination",
    listOfAnswers: [
        "uses a considerable amount of energy.",
        "is the most effective way to obtain larger water reserves.",
        "uses very little energy.",
        "burns quite a lot of fossil fuel."
    ]
}
const question29 = {
    from: 29,
    to: 29,
    type: 6,
    question: "One of the largest stores of fresh water in the world is",
    listOfAnswers: [
        "rivers and lakes.",
        "atmospheric rain and snow.",
        "ground water.",
        "artesian wells."
    ]
}

// type: 5
const questions30_34 = {
    from: 30,
    to: 34,
    type: 5,
    listOfResearchers: [
        "is quite popular due to it not being too affected by temperature and location.",
        "is being tried via an evaporation process.",
        "is not energy efficient.",
        "is best for poorer countries.",
        "is made up of both clouds and water vapour.",
        "is increased when temperatures fall rapidly."
    ],
    listOfStatements: [
        "Turning salt water into drinking water",
        "Large-scale fresh water production through evaporation",
        "Water available in the atmosphere",
        "The use of dew as a water source",
        "The amount of water collected from dew"
    ]
}

// type: 11
const questions35_40 = {
    from: 35,
    to: 40,
    type: 11,
    listOfQuestions: [
        "The amount of water consumed by wealthier countries is just as much as poorer countries.",
        " Glaciers, rivers, artesian wells and ground water are all sources of fresh water.",
        "Large bodies of water, such as the sea, have yielded the most fresh water.",
        "The collection of water through the use of fog nets is becoming increasingly more popular around the world.",
        "If the sky is cloudy, dew will not form.",
        "Dew and fog are major sources of water in smaller villages and isolated areas."
    ]
}

const readingPassage1 = {
    passageNumber: 1,
    title:'AUSTRALIA’S PLATYPUS',
    content: [
        "Of all the creatures on the earth, the Australian platypus, Omithorbynchusparadoxus, is perhaps one of the most mysterious and reclusive. Derived from the Latin platys meaning ‘flat and broad’ and pous meaning ‘foot’, the platypus has long been an iconic symbol of Australia. Upon being discovered in Australia in the 1700s, sketches of this unusual creature were made and sent back to England whereupon they were considered by experts to be a hoax. Indeed, the incredible collection of its body parts – broad, flat tail, rubbery snout, webbed feet and short dense fur – make it one of the world’s most unusual animals.",
        "Officially classified as a mammal, the egg-laying platypus is mostly active during the night, a nocturnal animal. As if this combination of characteristics and behaviours were not unusual enough, the platypus is the only Australian mammal known to be venomous. The male platypus has a sharply pointed, moveable spur on its hind foot which delivers a poison capable of killing smaller animals and causing severe pain to humans. The spur – about 2 centimetres in length – is quite similar to the fang of a snake and, if provoked, is used as a means of defence. Those who have been stung by a platypus’ spur report an immediate swelling around the wound followed by increased swelling throughout the affected limb. Excruciating, almost paralysing pain in the affected area accompanies the sting which, in some victims has been known to last for a period of months. One report from a victim who was stung in the palm of the hand states that “…the spur could not be pulled out of the hand until the platypus was killed.” During the breeding season, the amount of venom in the male platypus increases. This has led some zoologists to theorise that the poisonous spur is primarily for asserting dominance amongst fellow-males. To be stung by a male platypus is a rare event with only a very small number of people being on the receiving end of this most reclusive creature.",
        "In the same area of the hind foot where the male has the poisonous spur, the female platypus only develops two buds which drop off in their first year of life never to appear again. The female platypus produces a clutch of one to three eggs in late winter or spring, incubating them in an underground burrow. The eggs are 15-18 millimetres long and have a whitish, papery shell like those of lizards and snakes. The mother is believed to keep the eggs warm by placing them between her lower belly and curled-up tail for a period of about 10 or 11 days as she rests in an underground nest made of leaves or other vegetation collected from the water. The baby platypus drinks a rich milk which is secreted from two round patches of skin midway along the mother’s bell)’. It is believed that a baby platypus feeds by slurping up milk with rhythmic sweeps of its stubby bill. When the juveniles first enter the water at the age of about four months, they are nearly (80-90%) as long as an adult. Male platypus do not help to raise the young.",
        "In Australia, the platypus is officially classified as ‘Common but Vulnerable’. As a species, it is not currently considered to be endangered. However, platypus populations are believed to have declined or disappeared in many catchments 1, particularly in urban and agricultural landscapes. In most cases, the specific underlying reasons for the reduction in numbers remain unknown. Platypus surveys have only been carried out in a few catchments in eastern Australia. It is therefore impossible to provide an accurate estimate of the total number of platypus remaining in the wild. Based on recent studies, the average platypus population density along relatively good quality streams in the foothills of Victoria’s Great Dividing Range is only around one to two animals per kilometre of channel. Because platypus are predators near the top of the food chain and require large amounts of food to survive (up to about 30% of a given animal’s body weight each day), it is believed that their numbers are most often limited by the availability of food, mainly in the form of bottom-dwelling aquatic invertebrates such as shrimps, worms, yabbies, pea-shell mussels, and immature and adult aquatic insects. Small frogs and fish eggs are also eaten occasionally, along with some terrestrial insects that fall into the water from overhanging vegetation.",
        "1: Catchments are an area of land drained by a creek or river system, or a place set aside for collecting water which runs off the surface of the land.",
        "Until the early twentieth century, platypus were widely killed for (heir fur. The species is now protected by law throughout Australia. Platypus are wild animals with specialised living requirements. It is illegal for members of the public to keep them in captivity. A platypus which has been accidentally captured along a stream or found wandering in an unusual place should never be taken home and treated as a pet, even for a brief time. The animal will not survive the experience. Only a small number of Australian zoos and universities hold a permit to maintain platypus in captivity for legitimate display or research purposes. Current Australian government policy does not allow’ this species to be taken overseas for any reason.",
    ]

}

const answers = [
    {
        questionNumber:1,
        answer: 'NO',
    },
    {
        questionNumber:2,
        answer: 'YES',
    },
    {
        questionNumber:3,
        answer: 'NOT GIVEN',
    },
    {
        questionNumber:4,
        answer: 'NOT GIVEN',
    },
    {
        questionNumber:5,
        answer: 'YES',
    },
    {
        questionNumber:6,
        answer: 'spur',
    },
    {
        questionNumber:7,
        answer: 'two buds',
    },
    {
        questionNumber:8,
        answer: 'nest',
    },
    {
        questionNumber:9,
        answer: 'milk',
    },
    {
        questionNumber:10,
        answer: 'common but vulnerable',
    },
    {
        questionNumber:11,
        answer: 'urban and agricultural',
    },
    {
        questionNumber:12,
        answer: 'food',
    },
    {
        questionNumber:13,
        answer: ['permit, permission'],
    },
]

const initUserAnswers = [{
    questionNumber: 1,
    answer: "",
},
{
    questionNumber: 2,
    answer: "",
},
{
    questionNumber: 3,
    answer: "",
},
{
    questionNumber: 4,
    answer: "",
},
{
    questionNumber: 5,
    answer: "",
},
{
    questionNumber: 6,
    answer: "",
},
{
    questionNumber: 7,
    answer: "",
},
{
    questionNumber: 8,
    answer: "",
},
{
    questionNumber: 9,
    answer: "",
},
{
    questionNumber: 10,
    answer: "",
},
{
    questionNumber: 11,
    answer: "",
},
{
    questionNumber: 12,
    answer: "",
},
{
    questionNumber: 13,
    answer: "",
},
]

const formatTime = (time) => {
    const minute = Math.floor(time/60);
    const second = time - minute*60;
    return `${minute}:${second}`;
}


const IeltsReadingTest = () => {
    const [countDown, setCountDown] = useState(1000)
    useEffect(() => {
        const clockInterval = setInterval(() => {
            setCountDown(preState => {
                if (preState === 0){
                    clearInterval(clockInterval);
                    subMit()
                    return 0;
                }
                return preState - 1
            });
        }, 1000)
        return () => {
            clearInterval(clockInterval)
        }
    }, [])

    const [userAnswers, setUserAnswers] = useState(initUserAnswers)
    const handleChange = (event) => {
        userAnswers.map((item) => {
            if (item.questionNumber === event.target.id) {
                item.answer = event.target.value;
            }
        })
        setUserAnswers(userAnswers)
    }

    const subMit = () => {
        let grade = 0;
        userAnswers.map((item,index) => {
            if (item.answer === answers[index].answer){
                grade++;
            }
        })
        alert(`Your point: ${grade}`)
    }

    return (
        <div className="reading-box">
            <div className='split'>
                <h1><strong>READING PASSAGE {readingPassage1.passageNumber}</strong></h1>
                <h2>{readingPassage1.title}</h2>
                {readingPassage1.content.map((item,index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </div>

            <div className="split">
                <YesNoQuestions questions = {question1_5} handleChange={handleChange}></YesNoQuestions>
                <SummaryNoteCompletion questions={question6_9} handleChange={handleChange}></SummaryNoteCompletion>
                <SentenceCompletion questions={question10_13} handleChange={handleChange}></SentenceCompletion>
                {/* <MatchingHeadings questions={question14_18}></MatchingHeadings>
                <MatchingParagraphInformation questions={question19_23}></MatchingParagraphInformation>
                <ListSelection questions={questions24_25}></ListSelection>
                <MultipleChoice questions={question26}></MultipleChoice>
                <MultipleChoice questions={question27}></MultipleChoice>
                <MultipleChoice questions={question28}></MultipleChoice>
                <MultipleChoice questions={question29}></MultipleChoice>
                <MatchingParagraphInformation questions={questions30_34}></MatchingParagraphInformation>
                <TrueFalseNotGiven questions={questions35_40}></TrueFalseNotGiven> */}
            </div>
            
            <button onClick={subMit}>Submit</button>
            <h2>{formatTime(countDown)}</h2>
        </div>
    )
}
export default IeltsReadingTest