import { useEffect, useState } from "react";  
import Options from './components/Options/Options';  
import Feedback from './components/Feedback/Feedback';  
import Notification from './components/Notification/Notification'; 
import Description from './components/Description/Description';  
import "./App.css";   

const App = () => {  
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });  

    useEffect(() => {  
        const savedFeedback = JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 };  
        setFeedback(savedFeedback);  
    }, []);  

    useEffect(() => {  
        localStorage.setItem('feedback', JSON.stringify(feedback));  
    }, [feedback]);  

    const updateFeedback = (feedbackType) => {  
        setFeedback((prevFeedback) => ({  
            ...prevFeedback,  
            [feedbackType]: prevFeedback[feedbackType] + 1,  
        }));  
    };  

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;  
    const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0; 
    const resetFeedback = () => {  
        setFeedback({ good: 0, neutral: 0, bad: 0 });  
    };  
    
    return (  
        <div className="app">  
            <Description />
            <Options   
                updateFeedback={updateFeedback}   
                totalFeedback={totalFeedback}   
                resetFeedback={resetFeedback}   
                feedbackCounts={feedback}  
            />  
            {totalFeedback > 0 ? (  
                <Feedback   
                    feedbackCounts={feedback}   
                    totalFeedback={totalFeedback}   
                    positiveFeedback={positiveFeedback}
                />  
            ) : (  
                <Notification message="No feedback given yet." />  
            )}  
        </div>  
    );  
};  

export default App;