import { useParams } from 'react-router-dom'
import './QuizResult.scss'

export default function QuizResults() {
    const { selectedResult } = useParams()
    const info = selectedResult.split(' ')
    console.log(info);

    return (
        <section className="quiz-result">
            <h2>hellaur</h2>
        </section>
    )
}