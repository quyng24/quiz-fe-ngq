import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../serveces/topicService";
import { getListQuestion } from "../../serveces/questionService";
import { getCookie } from "../../helper/cookie";
import { createAnswer } from "../../serveces/quizService";

function Quiz() {
    const params = useParams();
    const navigate = useNavigate();
    const [dataTopic, setDataTopic] = useState([]);
    const [dataQuestion, setDataQuestion] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let selectedAnswers = [];
        for(let i = 0; i < e.target.elements.length; i++) {
            if(e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;
                selectedAnswers.push({
                    questionId: name,
                    answerId: value
                });
            }
        } 
        let options = {
            userId: parseInt(getCookie('id')),
            topicId: parseInt(params.id),
            answers: selectedAnswers
        }
        const response = await createAnswer(options);
        if(response) {
            navigate(`/result/${response.id}`);
        }
    }
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id);
            setDataTopic (response);
        };
        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id);
            setDataQuestion(response);
        }
        fetchApi();
    }, []);
    return (
        <>
            <h2>Topic Quiz: {dataTopic && (<>{dataTopic.name}</>)}</h2>
            <div className="form-quiz">
                <form onSubmit={handleSubmit}>
                    {dataQuestion.map((item, index) => (
                        <div className="form-quiz__item" key={item.id}>
                            <p>Câu {index+1}: {item.question} </p>
                            {item.answers.map((itemAns, indexAns) => (
                                <div className="form-quiz__answer" key={indexAns}>
                                    <input type="radio" name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`} />
                                    <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button className="btn-submit" type="submit">Nộp bài</button>
                </form>
            </div>
        </>
    )
}
export default Quiz;