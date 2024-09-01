import './styles.css'
import tickets from './assets/tickets.png'
import map from './assets/map.png'
import mountains from './assets/mountain.png'
import directions from './assets/directions.png'
import guide from './assets/guide.png'
import laguage from './assets/laguage.png'
import scenary from './assets/scenary.jpg'
import { IoIosArrowDropright } from "react-icons/io";

const About = () => {
    return(
        <>
        <div className='about'>
            <div className='about-heading'>
                <h4 className='highlighted-text'>What We Offer</h4>
                <h2 className='charis-text'>Best Services We Offer!</h2>
            </div>
            <div className='about-services'>
                <div className='service'>
                    <img src={laguage}/>
                    <h3 className='charis-text'>Exicting Journeys</h3>
                    <p className='service-text'>Embark on thrilling expeditions and immerse yourself in unforgettable experiences.</p>
                    <a className='charis-text highlighted-text'>Learn More <span className='arrow'><IoIosArrowDropright/></span></a>
                </div>
                <div className='service'>
                    <img src={map} />
                    <h3 className='charis-text'>Expert Guides</h3>
                    <p className='service-text'>Our seasoned guides ensure a safe and enriching adventure, tailored to your needs.</p>
                    <a className='charis-text highlighted-text'>Learn More <span className='arrow'><IoIosArrowDropright/></span></a>
                </div>
                <div className='service'>
                    <img src={guide} />
                    <h3 className='charis-text'>Personalized Packages</h3>
                    <p className='service-text'>Choose from a variety of custom packages designed to suit every traveler's desire.</p>
                    <a className='charis-text highlighted-text'>Learn More <span className='arrow'><IoIosArrowDropright/></span></a>
                </div>
                <div className='service'>
                    <img src={mountains} />
                    <h3 className='charis-text'>Scenic Trails</h3>
                    <p className='service-text'>Explore breathtaking trails and discover the beauty of untouched nature.</p>
                    <a className='charis-text highlighted-text'>Learn More <span className='arrow'><IoIosArrowDropright/></span></a>
                </div>
                <div className='service'>
                    <img src={tickets} />
                    <h3 className='charis-text'>Family Adventures</h3>
                    <p className='service-text'>Create lasting memories with family trips that are fun and suitable for all ages.</p>
                    <a className='charis-text highlighted-text'>Learn More <span className='arrow'><IoIosArrowDropright/></span></a>
                </div>
                <div className='service'>
                    <img src={directions} />
                    <h3 className='charis-text'> Comprehensive Support.</h3>
                    <p className='service-text'>Receive a complete guide to make your adventure seamless and worry-free.</p>
                    <a className='charis-text highlighted-text'>Learn More <span className='arrow'><IoIosArrowDropright/></span></a>
                </div>
            </div>
            <div className='about-image-text-container'>
                <img src={scenary} className='about-image'/>
                <div className='about-overlay-text'>
                    <h4 className='charis-text'><span className='highlighted-text'>Making Adventure</span> Tours and Activities Accessible and <span className='highlighted-text'>Affordable</span> for Everyone.</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default About