import {useState, useEffect} from 'react';

const User = () => {
    const [userData, setUserData] = useState(null);
    const [showPending, setShowPending] = useState(true);

    const fetchData = async () => {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        setUserData(data);
        setShowPending(false);
    };

    useEffect(() => {
        const fetchTimeout = setTimeout(() => {
            fetchData();
            setShowPending(true);
        }, 3000);

        return () => clearTimeout(fetchTimeout);
    }, [userData]);

    useEffect(() => {
        const pendingTimeout = setTimeout(() => {
            setShowPending(true);
        }, 3000);

        return () => clearTimeout(pendingTimeout);
    }, []);

    return (
        <div className='user'>
            {showPending ? <p>Pending...</p> : (
                <div className='user-card'>
                    <img src={userData.results[0].picture.large} alt='User'/>
                    <p>{userData.results[0].name.first}</p>
                </div>
            )}
        </div>
    );
};

export default User;
