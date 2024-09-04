import elephants from './assets/elephants.mp4'
import location from './assets/location.png'
import phone from './assets/phone.png'
import email from './assets/email.png'
import crestedCranes from './assets/crested-cranes.jpg'
import gorilla from './assets/gorilla.mp4'
import hippos from './assets/hippos.mp4'

const Contact = () => {
    return (
        <>
        <section className='contact'>
            <div className='contact-container'>
            <div className="video-carousel-container">
      <div className="contact-text">
        <h2 className="charis-text">
          <span className="highlighted-text larger-text">Contact</span> Us!
        </h2>
        <p className="text-small">
          Have any Questions? <br /> Don't hesitate to reach out on Email, WhatsApp, and X
        </p>
      </div>
      <div className="video-carousel">
        <div className="video-container">
        <video className="carousel-video" autoPlay loop muted>
            <source src={elephants} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="carousel-video" autoPlay loop muted>
            <source src={gorilla} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="carousel-video" autoPlay loop muted>
            <source src={hippos} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Duplicate the videos for smooth looping */}
          <video className="carousel-video" autoPlay loop muted>
            <source src={elephants} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="carousel-video" autoPlay loop muted>
            <source src={gorilla} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="carousel-video" autoPlay loop muted>
            <source src={elephants} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
            <div className='contact-section'>
                <h4 className='highlighted-text'>Contact Info</h4>
                <h2 className='charis-text'>Our Contact Information</h2>
               <div className='contact-infos'>
                    <div className='contact-info'>
                        <img src={location}/>
                        <h4 className='charis-text'>Our Location</h4>
                        <p className='text-small'>Kabeba Safaris Ltd <br/> P.O Box 170524, Kampala Uganda</p>
                    </div>
                    <div className='contact-info'>
                        <img src={phone}/>
                        <h4 className='charis-text'>Phone Number</h4>
                        <p className='text-small'>(+256) 77108 2291</p>
                    </div>
                    <div className='contact-info'>
                        <img src={email}/>
                        <h4 className='charis-text'>Our Email</h4>
                        <p className='text-small'>info@kabebasafaris.com</p>
                        <p className='text-small'>Kabebasafaris@gmail.com</p>
                    </div>
               </div>
            </div>
            <div className='contact-form-section'>
                <img src={crestedCranes} className='contact-image'/>
                <form className='contact-form'>
                    <h1 className='charis-text larger-text'>Get In Touch!</h1>
                    <h3 className='charis-text'>Send Us a Message</h3>
                    <div className='contact-form-one'>
                        <input placeholder='Name'/>
                        <input placeholder='Phone'/>
                    </div>
                    <div className='contact-form-two'>
                        <input placeholder='Email'/>
                        <input placeholder='Subject'/>
                    </div>
                    <textarea rows={10} placeholder='Your Message' className='charis-text' ></textarea>
                    <button>Send</button>
                </form>
            </div>
            </div>
        </section>
        </>
    )
}
export default Contact