import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef } from 'react'

const heroSlides = [
  {
    title: 'Get Rid of Fine Lines & Wrinkles',
    subtitle: 'with Hifu Therapy',
    offer: 'BUY 1 GET 1 FREE',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Advanced Laser Treatments',
    subtitle: 'For Flawless Skin',
    offer: 'Book Now & Save',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
]

const stats = [
  { label: 'Delighted Clients', value: '1,00,000+' },
  { label: 'Proven Expertise', value: '193+' },
  { label: 'Procedures', value: '1,00,000+' },
  { label: 'Years of Experience', value: '15+' },
]

const reviews = [
  {
    name: 'Aarti Sharma',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    review: 'Absolutely loved my experience! The staff is so professional and the results are amazing. Highly recommend VW Clinic!',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    review: 'Dr. Rupali is the best! She explained everything and made me feel comfortable. My skin has never looked better.',
    rating: 5,
  },
  {
    name: 'Neha Verma',
    photo: 'https://randomuser.me/api/portraits/women/43.jpg',
    review: 'Great ambience, friendly staff, and visible results. I will definitely come back for more treatments.',
    rating: 4,
  },
]

const services = [
  { title: 'Cryo Therapy', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80' },
  { title: 'Laser Hair Removal', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { title: 'Thread Lift', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' },
  { title: 'GFC Treatment', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80' },
  { title: 'Acne Scar Treatment', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80' },
  { title: 'Weight Loss', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { title: 'V-Lase', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' },
  { title: 'HIFU', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80' },
]

function Arrow({ className, style, onClick, direction }) {
  return (
    <button
      className={`absolute top-1/2 z-20 -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} bg-white border border-purple-300 text-purple-700 hover:bg-purple-100 shadow p-2 focus:outline-none rounded-full flex items-center justify-center`}
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      {direction === 'left' ? (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      ) : (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      )}
    </button>
  )
}

const Home = () => {
  const sliderRef = useRef()
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  }
  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  }

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <div className="w-full max-w-6xl mx-auto mt-8 overflow-hidden shadow-lg relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {heroSlides.map((slide, idx) => (
            <div key={idx} className="relative h-[350px] md:h-[450px] flex items-center bg-gray-100">
              <img src={slide.img} alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10 p-8 md:p-16 flex flex-col gap-4 max-w-xl text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">{slide.title}</h2>
                <p className="text-xl md:text-2xl text-white font-semibold">{slide.subtitle}</p>
                <span className="inline-block bg-[#FBDB8640] text-yellow-900 font-bold px-4 py-2 text-lg shadow">{slide.offer}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 my-12 bg-white shadow p-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-start md:items-center">
            <span className="text-2xl md:text-3xl font-bold text-purple-700">{stat.value}</span>
            <span className="text-gray-600 text-sm md:text-base mt-1 text-left md:text-center">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Reviews Carousel */}
      <div className="max-w-3xl mx-auto my-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-sky-800">What Our Clients Say</h2>
        <div className="bg-sky-50 p-0 md:p-8 shadow-lg">
          <Slider {...reviewSettings}>
            {reviews.map((review, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 transition-all duration-300">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <img src={review.photo} alt={review.name} className="w-20 h-20 object-cover border-4 border-white shadow-lg mb-2" />
                  <span className="font-bold text-lg text-sky-800">{review.name}</span>
                  <div className="flex mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                    ))}
                  </div>
                </div>
                <div className="flex-1 mt-3 bg-yellow-100 hover:bg-sky-100 transition-colors duration-300 p-6 md:p-8 shadow-lg text-sky-900 border-2 border-transparent hover:border-sky-300 rounded-none text-lg font-medium text-center md:text-left">
                  <span className="block">{review.review}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Treatment Services Section */}
      <section className="w-full bg-gradient-to-r from-sky-100 to-teal-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-sky-800 mb-8 text-center">Our Treatment Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white hover:bg-sky-100 transition-colors duration-300 shadow p-4 flex flex-col items-center cursor-pointer border border-sky-100 hover:border-sky-300">
                <img src={service.img} alt={service.title} className="w-24 h-24 object-cover mb-2 rounded" />
                <span className="font-semibold text-sky-800 text-lg text-center">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 