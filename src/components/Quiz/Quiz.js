import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import QuizData from '../../data/quiz-data.json'
import './Quiz.scss'

export default function Quiz() {
    const [question, setQuestion] = useState('')
    const [option, setOption] = useState([])
    const [selected, setSelected] = useState('')
    const [answer, setAnswer] = useState([])
    const [selectedResult, setSelectedResult] = useState([])
    const [disableNext, setDisableNext] = useState(true);

    let { quizId } = useParams()

    useEffect(() => {
        let selectedQuestion = QuizData.find(question => question.id === quizId)
        if (selectedQuestion) {
            setQuestion(selectedQuestion.question)
            setOption(selectedQuestion.answers)
        }
    }, [quizId])

    const handleSelect = (option) => {
        setSelected(option);
        setDisableNext(false)
    }

    const generateCombinations = (currentAnswers, currentIndex) => {
        if (currentIndex === QuizData.length) {
            if (currentAnswers = answer)
                setSelectedResult(currentAnswers);
            return;
        }

        const currentQuestion = QuizData[currentIndex];

        for (const option of currentQuestion.answers) {
            generateCombinations([...currentAnswers, option], currentIndex + 1);
        }
    };

    useEffect(() => {
        generateCombinations([], 0);
    }, [quizId]);

    const navigate = useNavigate();

    const handleNext = () => {
        setAnswer((previousSelections) => [...previousSelections, selected]);
        console.log(answer)
        let nextQuizId = parseInt(quizId) + 1;
        if (nextQuizId <= QuizData.length) {
            setDisableNext(true);
            navigate(`/quiz/${nextQuizId}`)
        } else if (nextQuizId === 7) {
            navigate(`/loading/${selectedResult}`)
        }
    }

    return (
        <section className="quiz">
            <h2 className="quiz__question">{question}</h2>
            <div className="quiz__button-container">
                <ul className="quiz__answer-list">{option.map((option, index) =>
                    <li key={index}><button className='quiz__button' onClick={() => handleSelect(option)} >{option}</button></li>
                )}</ul>
                <button className='quiz__next' onClick={handleNext} disabled={disableNext} >Next</button>
            </div>
        </section>
    )
}