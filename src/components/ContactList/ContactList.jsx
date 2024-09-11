import s from "./ContactList.module.css";  
const ContactList = ({ name, number }) => {  
    return (  
        <div className="contact">  
            <p>Name: {name}</p>  
            <p>Number: {number}</p>  
        </div>  
    );  
};  

export default ContactList;  