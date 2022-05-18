import React, { useState } from 'react';
import { getDatabase, ref, set, child, get, update, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';


const PollComponent = () => {
    const db = getDatabase();
    const auth = getAuth();
    const [loading, setLoading]=useState(true);
    const [poll, setPoll]=useState('');
    const [like, setLike] = useState(false);

    const pollRef = ref(db, 'polls/5602001');
    const user = auth?.currentUser?.email;


    React.useEffect(() => {
        onValue(pollRef, (snapshot) => {
            console.log(snapshot.val());
            setPoll(snapshot.val());
            const obj = snapshot.val();
            let count = obj?.likes.filter((item) => item);
            setLike(count.length);
            setLoading(false);
          });
    }, []);

    const handlePollState = (e, user) => {
        switch(e.target.name){
            case 'false': 
                let likedObj = poll?.likes.filter((item) => item === user && item);
                if (likedObj.length != 0){
                    let likedUsers = poll?.likes.filter((item) => item !== user && item);
                    set(ref(db, 'polls/5602001/likes'), [...likedUsers]).then(() => {
                        console.log("Voting removed!!!!!!!!!!!!!!!!!");
                    }).catch((error) => {
                        console.log("The write failed...");
                    });
                }else{
                    console.log("User voting  already removed....");
                }
                break;
            case 'true':
                let objList = poll?.likes.filter((item) => item === user && item)
                if (objList.length === 0 && objList.length <= 1){
                    set(ref(db, 'polls/5602001/likes'), [...poll.likes, user]).then(() => {
                        console.log("Data saved successfully!");
                    }).catch((error) => {
                        console.log("The write failed...");
                    });
                }else{
                    console.log("User already voted....");
                }
                break;
            default : 
                console.log('handling poll voating... @@@@@@@', e.target.name);
        }
    }

    console.log("Poll statistics : ", poll);


    return (
        <>
            <div className="w3-panel w3-card-4">
                <div className="w3-panel w3-padding">
                <span className=" w3-text-green w3-left w3-wide w3-tiny"><b><u> ZestGeek Poll Hub </u></b></span>
                <span className=" w3-right w3-text-deep-purple"> Numbers of people voded for # <b className="w3-xlarge">{like}</b> </span>

                </div>
                {
                    poll && !loading ? <h3 className='w3-text-red w3-center'>{poll.question}</h3> : "no poll found! Adios amigos..."
                }

                <hr />

                <div className="w3-panel">
                    <button name="false" className="w3-left w3-button w3-border w3-round w3-button" onClick={(e) => handlePollState(e, user)}>Feeling Exhausted!</button>
                    <button name="true" className="w3-right w3-button w3-border w3-round w3-button" onClick={(e) => handlePollState(e, user)}>Feeling Great!</button>
                </div>

            </div>
        </>
    )
}
export default PollComponent;