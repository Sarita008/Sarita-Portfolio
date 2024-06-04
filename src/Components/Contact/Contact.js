import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [clicked ,setClicked]=useState(null);

const onChangeFNameHandler = (e)=>{
    setFirstname(e.target.value);
}
const onChangeLNameHandler = (e)=>{
  setLastname(e.target.value);
}
const onChangeEmailHandler = (e)=>{
  setEmail(e.target.value);
}
const onChangeSubjectHandler = (e)=>{
  setSubject(e.target.value);
}
const onChangeMessageContentHandler = (e)=>{
  setMessageContent(e.target.value);
}

const sendEmail = (firstname, lastname, email, subject, message)=>{
    //console.log(firstname, lastname, email, subject, message);
    emailjs.send("service_rpn3mfh","template_19lelub",{
        from_name: subject,
        user_name: firstname + " " + lastname,
        user_email: email,
        message: message,
    }, `NRnezUi36J9PIjB0L`)
    .then(()=>{
      setClicked(true);
    })
    .catch(()=>{setClicked(false)});
}

//console.log(firstname, lastname, email, subject,messageContent);
const onSubmitHandler = (e)=>{
  e.preventDefault();
  sendEmail(firstname, lastname, email, subject, messageContent);
}


  return (
    <div id='contactMe' className='contactSkills'>
    <div className='contact-info'>
        <div className="main-text">
          <h2 className="heading">Contact Me</h2>
          <span>Get in touch with me</span>
        </div>
        <form action="#">
        <div className="input-box">
             <input onChange={onChangeFNameHandler} name='firstname' type="text" placeholder="First Name" />
            <input onChange={onChangeLNameHandler} name='lastname' type="text" placeholder="Last Name" />
        </div>
            <input onChange={onChangeEmailHandler} name="email" type="email" placeholder="Email" />
            <input onChange={onChangeSubjectHandler} name="subject" type="text" placeholder="Subject" />
            <textarea onChange={onChangeMessageContentHandler} name="messageConetnt" id="" cols="30" rows="10">
            </textarea>
            {clicked == true && <p style={{color: "green"}}>Email sent</p>}
            
            {clicked == false && <p style={{color: 'red'}}>Error! try again</p>}

            {clicked == null && <p></p>}
            
        <div className="formBtn">
            <button onClick={onSubmitHandler} type="submit" className="btn">Send Message</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Contact;
