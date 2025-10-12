import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/photos/message-icon.png'
import phone_icon from '../../assets/photos/phone-icon.png'
import location_icon from '../../assets/photos/location-icon.png'

const Contact = () => {  
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "72e571b4-6360-45d4-b92c-aa9b25b5e73e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>We believe communication builds great connections. Reach out to us anytime — we’re available to answer your questions and guide you toward the right path for your future.Have a question or need more details? Don’t hesitate to reach out. We’re just a call or message away and always ready to assist you.Reach out today and experience friendly support, quick responses, and expert guidance for all your needs.</p>
        <ul>
            <li><img src={msg_icon}/>nmeittalegaon@gmail.com</li>
            <li><img src={phone_icon}/>02114-231666</li>
            <li><img src={location_icon}/> Samarth Vidya Sankul, Vishnupuri, Talegaon Dabhade, Pune – 410507</li>
        </ul>
      </div>
      <div className="contact-col">
               <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your Mobile Number" required/>
                <label>Write your message here</label>
                <textarea name='message'rows="6" placeholder='Enter your message'/>
                <button type="submit" className='btn dark-btn'> Submit</button>
               </form>
               <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
