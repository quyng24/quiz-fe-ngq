import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnswer } from "../../serveces/answerService";
import { getListQuestion } from "../../serveces/questionService";
import './Result.scss';

function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswer = await getAnswer(params.id);
      const topicId = dataAnswer.map(item => item.topicId);
      const answersData = dataAnswer.flatMap(item => item.answers);
      const dataQuestions = await getListQuestion(topicId);
      let resultFinal = [];
      for (let i = 0; i < dataQuestions.length; i++) {
        const matchingAnswer = answersData.find(
          (item) => Number(item.questionId) === Number(dataQuestions[i].id)
        );
        resultFinal.push({
          ...dataQuestions[i],
          ...(matchingAnswer || {})
        });        
      }
      setDataResult(resultFinal);
    };
    fetchApi();
  }, []);
  const correctCount = dataResult.filter(item => item.correctAnswer == item.answerId).length;
  return (
    <>
      <h2>Kết quả: {correctCount}/{dataResult.length}</h2>
      <div className="answer">
        {dataResult.map((item, index) => (
          <div key={item.id} className="answer__item">
            <p>
              Câu {index + 1}: {item.question}
              {item.correctAnswer == item.answerId ? (
                <span className="result__tag result__tag--true">Đúng</span>
              ) : (
                <span className="result__tag result_tag--false">Sai</span>
              )}
            </p>
            {item.answers.map((itemAns, indexAns) => {
                let className = '';
                let checked = false;
                if(item.answerId == indexAns) {
                  checked = true;
                  className = 'result__item--selected ';
                }
                if(item.correctAnswer == indexAns) {
                  className += 'result__item--result';
                }
                return (
                  <div className="result__answer" key={indexAns}>
                      <input type="radio" defaultChecked={checked} disabled />
                      <label className={className}>{itemAns}</label>
                  </div>
                )
            })}
            <Link className="redo" to={'/quiz/'+item.id}>Làm lại</Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default Result;
