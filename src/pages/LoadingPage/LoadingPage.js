import { useNavigate, useParams } from 'react-router-dom';
import './LoadingPage.scss';

export default function LoadingPage() {
    const navigate = useNavigate();
    const { selectedResult } = useParams();

    const delay = 3000;
    setTimeout(() => {
        navigate(`/quiz/result/${selectedResult}`);
    }, delay);
    return (
        <section className="loading-page">
            <h2 className="loading-page__title">Loading...</h2>
        </section>
    )
}