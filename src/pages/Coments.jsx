import {useEffect, useState} from "react";
import '../css/Coments.css';

const Comments = () => {
    const [userData, setUserData] = useState([]);
    const [showPending, setShowPending] = useState(false);
    const [showComment, setShowComment] = useState(false);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const data = await response.json();
        setUserData(data);
        setShowPending(true);
        let time = setTimeout(() => {
            setShowPending(false);
        }, 3000);
        return () => clearTimeout(time)
    };

    useEffect(() => {
        const loadComments = async () => {
            fetchData();
        }
        loadComments();
    }, [showComment]);

    const showComments = () => {
        setShowComment(prev => !prev);
    };
    return (
        <div className="comments">
            <div className="comments-inner">
                <span>Pages</span>
                <button className="comments-inner-btn">1</button>
                <button className="comments-inner-btn">2</button>
                <button className="comments-inner-btn">3</button>
            </div>
            <button className={`comments-show ${showComment ? "comments-unmount" : "comments-mount"}`}
                    onClick={showComments}>
                {showComment ? "Unmount Comment Component" : "Mount Comment Component"}
            </button>
            <div className="comments-block">
                <ul>
                    {showComment ? (
                        showPending ? (
                            <div className="comments-loader">
                                <p>Loading...</p>
                                <p className="comments-loader-anima"></p>
                            </div>
                        ) : (
                            userData.map(comment => (
                                <li key={comment.id}>{comment.body}</li>
                            ))
                        )
                    ) : null}
                </ul>
            </div>
        </div>
    );
};

export default Comments;
