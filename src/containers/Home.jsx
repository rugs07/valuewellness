import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState, useRef } from 'react'

// HERO SLIDES (use different images)
const heroSlides = [
  {
    title: 'Get Rid of Fine Lines & Wrinkles',
    subtitle: 'with Hifu Therapy',
    offer: 'BUY 1 GET 1 FREE',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80', // new: high-contrast, professional
  },
  {
    title: 'Advanced Laser Treatments',
    subtitle: 'For Flawless Skin',
    offer: 'Book Now & Save',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80', // new: high-contrast, professional
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

// SERVICES (all unique images)
const services = [
  { title: 'Cryo Therapy', img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80' },
  { title: 'Laser Hair Removal', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { title: 'Thread Lift', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { title: 'GFC Treatment', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { title: 'Acne Scar Treatment', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' }, // new image
  { title: 'Weight Loss', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80' },
  { title: 'V-Lase', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { title: 'HIFU', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
]

// BEFORE/AFTER (unique images)
const beforeImg = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80';
const afterImg = 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80';

// 3D SHOWCASE (use first 3 unique service images)
const showcaseImages = [
  'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
];

function Arrow({ className, style, onClick, direction }) {
  return (
    <button
      className={`absolute top-1/2 z-20 -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} bg-white border border-purple-300 text-purple-700 hover:bg-purple-100 shadow p-2 focus:outline-none flex items-center justify-center`}
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

// Animated Stats Counter
function AnimatedCounter({ value, duration = 2000, className }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const end = parseInt(value.replace(/\D/g, ''))
    if (isNaN(end)) return
    if (start === end) return
    let incrementTime = Math.floor(duration / end)
    let current = start
    const timer = setInterval(() => {
      current += Math.ceil(end / (duration / incrementTime))
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, incrementTime)
    return () => clearInterval(timer)
  }, [value, duration])
  // Add + or K if needed
  return <span className={className}>{count.toLocaleString()}+</span>
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
      <div className="w-full max-w-6xl mx-auto mt-8 overflow-hidden shadow-lg relative bg-white py-0">
        <Slider ref={sliderRef} {...sliderSettings}>
          {heroSlides.map((slide, idx) => (
            <div key={idx} className="relative h-[400px] md:h-[520px] flex items-center bg-white">
              <img src={slide.img} alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <div className="relative z-10 p-8 md:p-16 flex flex-col gap-4 max-w-2xl text-left bg-black/40 shadow-lg">
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{slide.title}</h2>
                <p className="text-2xl md:text-3xl text-yellow-200 font-semibold">{slide.subtitle}</p>
                <span className="inline-block bg-[#FBDB86] text-black font-bold px-6 py-3 text-xl shadow">{slide.offer}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Magic Stats Section */}
      <div className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { icon: '⭐', color: 'from-yellow-400 to-pink-400', ...stats[0] },
            { icon: '🎓', color: 'from-sky-400 to-teal-400', ...stats[1] },
            { icon: '💉', color: 'from-purple-400 to-pink-400', ...stats[2] },
            { icon: '⏳', color: 'from-teal-400 to-yellow-400', ...stats[3] },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className={`relative flex items-center justify-center w-28 h-28 mb-2 animate-spin-slow`}> 
                <span className={`absolute inset-0 bg-gradient-to-tr ${stat.color} blur-lg opacity-60 animate-pulse`}></span>
                <span className="relative z-10 flex items-center justify-center w-20 h-20 bg-white shadow-lg border-4 border-white">
                  <span className="text-3xl">{stat.icon}</span>
                </span>
              </div>
              <AnimatedCounter value={stat.value.replace(/\D/g, '')} className="text-3xl font-extrabold text-sky-800 drop-shadow-lg" />
              <span className="text-gray-600 text-base md:text-lg text-center font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="max-w-3xl mx-auto my-16 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-sky-800">What Our Clients Say</h2>
        <div className="bg-white p-0 md:p-8 shadow-lg">
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
                <div className="flex-1 mt-3 bg-yellow-100 hover:bg-sky-100 transition-colors duration-300 p-6 md:p-8 shadow-lg text-sky-900 border-2 border-transparent hover:border-sky-300 text-lg font-medium text-center md:text-left">
                  <span className="block">{review.review}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Treatment Services Section */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-sky-800 mb-8 text-center">Our Treatment Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white hover:bg-sky-100 transition-colors duration-300 shadow p-4 flex flex-col items-center cursor-pointer border border-sky-100 hover:border-sky-300">
                <img src={service.img} alt={service.title} className="w-24 h-24 object-cover mb-2" />
                <span className="font-semibold text-sky-800 text-lg text-center">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Image Slider Section */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-sky-800 mb-8 text-center">See the Transformation</h3>
          <BeforeAfterSlider beforeImg={beforeImg} afterImg={afterImg} />
        </div>
      </section>

      {/* Interactive 3D Card Showcase */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-sky-800 mb-8 text-center">Explore Our Signature Treatments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {showcaseImages.map((img, idx) => (
              <div
                key={idx}
                className="group bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg] hover:shadow-2xl cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div className="relative w-full h-64 flex items-center justify-center transition-transform duration-300 group-hover:rotate-y-6 group-hover:scale-110">
                  <img
                    src={img}
                    alt={`Showcase ${idx+1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-xl font-bold p-4">Signature Treatment</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6">Hover over a card to see the 3D effect!</p>
        </div>
      </section>
    </div>
  )
}

// BeforeAfterSlider component
function BeforeAfterSlider({ beforeImg, afterImg }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const handleDrag = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    let x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
    let percent = ((x - rect.left) / rect.width) * 100
    percent = Math.max(0, Math.min(100, percent))
    setPos(percent)
  }
  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-96 overflow-hidden shadow-lg cursor-ew-resize select-none user-select-none"
      onMouseMove={e => e.buttons === 1 && handleDrag(e)}
      onTouchMove={handleDrag}
      onClick={handleDrag}
    >
      <img
        src={beforeImg}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover user-select-none select-none"
        draggable={false}
        onDragStart={e => e.preventDefault()}
      />
      <img
        src={afterImg}
        alt="After"
        className="absolute inset-0 h-full object-cover user-select-none select-none"
        style={{ width: `${pos}%`, clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
        onDragStart={e => e.preventDefault()}
      />
      <div className="absolute inset-0 flex items-center" style={{ left: `${pos}%`, width: '2px', background: 'linear-gradient(to bottom, #0ea5e9, #06b6d4)' }}>
        <div className="w-2 h-12 bg-sky-400 mx-auto shadow-lg"></div>
      </div>
      <div className="absolute left-2 bottom-2 bg-sky-800 text-white px-3 py-1 ">Before</div>
      <div className="absolute right-2 bottom-2 bg-teal-600 text-white px-3 py-1 ">After</div>
    </div>
  )
}

export default Home 