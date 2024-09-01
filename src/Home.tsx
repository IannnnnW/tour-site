import './styles.css'
import hippos from './assets/hippos.mp4'

function Home() {
  return (
    <>
    <div className="image-text-container">
    <video className="full-width-video" autoPlay loop muted>
        <source src={hippos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="intro-overlay-text">
        <h4 className='highlighted-text welcome-text'>
          Explore Uganda
        </h4>
        <h1 className='intro-text charis-text'>Enjoy <br/> Luxurious Adventure Trips<br/><span className='highlighted-text'> With Us</span></h1>
        <h5 className='text-medium'>Hippopotamus - <i>Lake Mburo National Park</i></h5>
      </div>
    </div>
    </>
  )
    
}

export default Home
