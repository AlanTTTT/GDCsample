import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore';


const Subscribe = () => {
    const [subscribers, setSubscribers] = useState([]);
    const subscribersCollectionRef = collection(db, "subscribers");

    useEffect(() => {
        const getSubscribers = async () => {
            const data = await getDocs(subscribersCollectionRef);
            setSubscribers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))

        };

        getSubscribers();
    },[])
    
  return (
    <div>
        {subscribers.map((subscriber) => {
            return <div>
                <p>{subscriber.id}. {subscriber.email}</p>
            </div>;
        })}
    </div>
  )
}

export default Subscribe