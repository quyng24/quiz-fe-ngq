import { Link } from 'react-router-dom';
import './Topic.scss';
import { useEffect, useState } from 'react';
import { getListTopic } from '../../serveces/topicService';

function Topic() {
    const [topics, setTopic] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic();
            setTopic(response);
        };
        fetchApi();
    }, []);
    return (
        <>
            <h2>List of review topics</h2>
            {topics.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TOPIC NAME</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><Link to={'/quiz/'+item.id} >Perform</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}
export default Topic;