import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import QuizData from '../../data/quiz-data.json'
import './Quiz.scss'

export default function Quiz() {
    const [question, setQuestion] = useState('')
    const [option, setOption] = useState([])
    const [selected, setSelected] = useState('')
    const [answer, setAnswer] = useState([])

    let { quizId } = useParams()

    useEffect(() => {
        let selectedQuestion = QuizData.find(question => question.id === quizId)
        if (selectedQuestion) {
            setQuestion(selectedQuestion.question)
            setOption(selectedQuestion.answers)
            console.log(option)
        }
    }, [quizId])

    const handleSelect = (option) => {
        setSelected(option);
        console.log(selected)
    }

    const navigate = useNavigate();

    const handleNext = () => {
        setAnswer((previousSelections) => [...previousSelections, selected]);
        console.log(answer)
        let nextQuizId = parseInt(quizId) + 1;
        if (nextQuizId <= QuizData.length) {
            navigate(`/quiz/${nextQuizId}`)
        } else {
            const delay = 2000;
            setTimeout(() => {
                navigate('/quiz/result')
            }, delay);
        }
    }

    return (
        <section className="quiz">
            <h2 className="quiz__question">{question}</h2>
            <div className="quiz__button-container">
                <ul className="quiz__answer-list">{option.map((option, index) =>
                    <li key={index}><button className='quiz__button' onClick={() => handleSelect(option)} >{option}</button></li>
                )}</ul>
                <button className='quiz__next' onClick={handleNext} >Next</button>
            </div>
        </section>
    )
}