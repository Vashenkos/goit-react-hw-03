import s from "./ContactForm.module.css";  

const ContactForm = () => {  
  return (  
    <div className={s.container}> 
      <form className={s.form}>  
        <label className={s.label}>  
          <span>Name: </span>  
          <input 
          type="text" 
          name="username" />  
        </label>  
        <label>  
          <span>Number: </span>  
          <input type="number" name="usernumber" />  
        </label>  
        <button type="submit">Add Contact</button> 
      </form>  
    </div>  
  );  
};  

export default ContactForm;