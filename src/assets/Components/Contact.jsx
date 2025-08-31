import "./Contact.css"
const Contact = () =>{
    return(
      <section id="contact" className="contact-section">
        
        <div className="contact-heading">
               <h2>Contact Us</h2>
               <p>Let’s get started on your fitness journey.</p>
        </div>
    

        <div className="section-container">
          <div className="contact-info">
            <p>🔑🏋️ Sohail Qureshi</p>
            <p>&#128222; +91 8660143527</p>
             <p>&#128231; shayanfitessclub@gmail.com</p>
              <p>&#128205; Near Nehru chowk, base road chitguppa</p>
               <p>Moring 🕒 5:30 AM to 10:00 AM </p>
                <p>Evening 🕒 5:00 PM to 10:00 PM </p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="your name" required/>
             <input type="text" placeholder="your email" required/>
             <textarea placeholder="your message" required></textarea>
             <button className="submit">Send Message</button>
             
          </form>
         
        </div>
         <div className="embedded-map">
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d950.2355309308482!2d77.21810392836807!3d17.700193998948226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQyJzAwLjciTiA3N8KwMTMnMDcuNSJF!5e0!3m2!1sen!2sin!4v1754560565582!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Gym Location"
    ></iframe>
          </div>
        </section>
    )
}
export default Contact;