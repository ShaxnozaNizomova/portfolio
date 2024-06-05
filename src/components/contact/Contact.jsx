import React, { useState } from 'react'
import './Contact.css'
const BOT_TOKEN = "6324313326:AAHPAj1KWL-x8Hy3TdBrx9ztDJHc_tsPnnQ"
const CHAT_ID = "-4146124100"
let initialState = {
  fname:"",
  email:"",
  massage:"",
}
function Contact() {
    let [data, setData] = useState(initialState)
  const handleSubmit = e => {
      e.preventDefault()
      let my_text = ""
      my_text += data.fname
      my_text += data.email
      my_text += data.massage
      let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${my_text}&parse_mode=html`;
      let api =  new XMLHttpRequest();

      api.open("GET", url, true)
      api.send()

      alert("I will contact you soon")
  }
  return (
    <div id='contact'>
      <div>
          <h4 className='about__title'>CONTACT</h4>
          <div className='line'></div>
          <p className='about__text'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
        <div className='contact__form'>
        <div className='form'>
        <form onSubmit={handleSubmit} action="">
            <input className='contact__input' 
            value={data.fname} 
            onChange={e => setData(p => ({...p, fname: e.target.value}))} 
            type="text" 
            placeholder='Enter Your Full Name' />
            <input className='contact__input' 
            value={data.email} 
            onChange={e => setData(p => ({...p, email: e.target.value}))} 
            type="email" 
            placeholder='Enter Your Email' />
            <input className='input' 
            value={data.massage} 
            onChange={e => setData(p => ({...p, massage: e.target.value}))} 
             type="textarea" 
             placeholder='Type Your Massage'/>
             <button className='contact__btn'>Send</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Contact
