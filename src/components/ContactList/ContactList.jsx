const ContactList = ({ contacts }) => {  
    return (  
        <div className="contact-list">  
            {contacts.map((contact) => ( 
                <div className="contact"
                     key={contact.id}> 
                     <div className="pcon">
                    
                     <p> Name: {contact.name}</p>  
                     <p> <img className="imgpng " src="/src/img/call.png "  /> {contact.number}</p> 
                     </div>
                    <button  className="buttonDelete"type="button">Delete</button>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default ContactList;