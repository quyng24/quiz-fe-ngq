import { useEffect, useState } from "react";
import { getAnswerByUserId } from "../../serveces/answerService";
import { getListTopic } from "../../serveces/topicService";
import { Link } from "react-router-dom";

function Answers() {
    const [dataAnswer, setDataAnswer] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const answerByUserId = await getAnswerByUserId([]);
            const topics = await getListTopic();
            const mergedData = answerByUserId.map(item => {
                const topic = topics.find(t => t.id === item.topicId);
                return {
                  ...item,
                  topicName: topic ? topic.name : null
                };
              });
            setDataAnswer(mergedData.reverse());
        }
        fetchApi();
    }, []);
    return (
        <>
            <h2>Complete topic quiz</h2>
            {dataAnswer.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TOPIC NAME</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswer.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.topicName}</td>
                                <td><Link to={'/result/'+item.id} >Perform</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}
export default Answers;