const About = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow p-10 my-16 flex flex-col md:flex-row items-start gap-8">
      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Rupali Chauhan" className="w-32 h-32 object-cover border-4 border-purple-200" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">About VW Clinic</h2>
        <p className="text-gray-700 mb-6">VW Clinic is a leader in advanced skin, hair, and body treatments, led by Dr. Rupali Chauhan. With over 15 years of experience and 1,00,000+ delighted clients, we combine science and care for the best results.</p>
        <div className="font-semibold text-xl">Dr. Rupali Chauhan</div>
        <div className="text-gray-500 mb-2">Cometalogist and Wellness Coach</div>
        <p className="text-gray-600">Dr. Rupali is a renowned expert in dermatology and wellness, dedicated to helping clients achieve their best selves through personalized care and advanced treatments.</p>
        <div className="mt-8">
          <a href="#" className="inline-block bg-purple-300 hover:bg-purple-400 text-white font-bold px-6 py-3 transition">Book Your Appointment</a>
        </div>
      </div>
    </div>
  )
}

export default About 