import s from "./ContactForm.module.css";  

const ContactForm = () => {  
  return (  
    <div className={s.container}> 
      <form className={s.form}>  
        <label className={s.label}>  
          <span className="wera">Name </span>  
          <input 
          type="text" 
          name="username" />  
        </label>  
        <label className={s.input}>  
          <span className="wera">Number </span>  
          <input
          type="number" 
          name="usernumber" />  
        </label>  
        <button type="submit">Add Contact</button> 
      </form>  
    </div>  
  );  
};  

export default ContactForm;