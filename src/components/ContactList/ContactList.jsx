const ContactList = ({ name, number }) => {  
    return (  
        <div className="contact">  
            <p>Name: {name}</p>  
            <p>Number: {number}</p>  
        </div>  
    );  
};  

export default ContactList;  