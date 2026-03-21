import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { waBooking } from '../utils/whatsapp'

// Yale blue replaces all plain blue
const YALE_BLUE = '#0E4C92'

// Shiva image overlay used wherever blue bg was
const SHIVA_OVERLAY = `linear-gradient(rgba(10,5,30,0.88), rgba(10,5,30,0.88)), url('https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1400&q=80')`

// Airplane wings SVG pattern — yale blue tinted
const WINGS_PATTERN = `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 30 L5 8 L22 30 L5 52 Z' fill='rgba(13,71,161,0.18)'/%3E%3Cpath d='M60 30 L115 8 L98 30 L115 52 Z' fill='rgba(13,71,161,0.18)'/%3E%3Ccircle cx='60' cy='30' r='3' fill='rgba(13,71,161,0.12)'/%3E%3C/svg%3E")`

const categories = [
  { label: 'Temple Packages', icon: '🛕', to: '/temple', img: '/siva.png', priority: true },
  { label: 'Family Packages', icon: '👨‍👩‍👧‍👦', to: '/kerala', state: { tab: 'family' }, img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80' },
  { label: 'Honeymoon Packages', icon: '💑', to: '/kerala', state: { tab: 'honeymoon' }, img: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&q=80' },
  { label: 'Goa Packages', icon: '🏖️', to: '/goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80' },
  { label: 'International Packages', icon: '🌍', to: '/international', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80' },
  { label: 'Kerala Packages', icon: '🌴', to: '/kerala', state: { tab: 'group' }, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80' },
]

const testimonials = [
  { name: 'Priya Sharma', location: 'Chennai', text: 'Amazing Kerala trip! Everything was perfectly organized. The houseboat experience was unforgettable.', rating: 5 },
  { name: 'Rajesh Kumar', location: 'Bangalore', text: 'Saravana Travels made our honeymoon truly special. Highly recommend their packages!', rating: 5 },
  { name: 'Meena Devi', location: 'Coimbatore', text: 'The temple tour was spiritually enriching. Great service and very affordable pricing.', rating: 5 },
  { name: 'Arjun Nair', location: 'Hyderabad', text: 'Goa trip with friends was a blast! Well-planned itinerary and excellent support throughout.', rating: 5 },
]

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  const isDesktop = width >= 768
  return (
    <div className="pt-0">
      {/* Hero — Shiva bg */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0" style={{ background: '#0a0f1e' }}>
          <img
            src="/siva.png"
            alt="bg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,30,0.20)' }}></div>
        </div>
        <div className="text-center text-white px-4 max-w-5xl mx-auto relative z-10 pt-24 md:pt-0">
          <p className="text-orange-300 font-medium mb-2 tracking-widest text-sm uppercase">🕉️ Welcome to Saravana Travels</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Explore the <span className="text-orange-400">Divine Serenity</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
            Discover breathtaking destinations, spiritual journeys, and unforgettable experiences crafted just for you.
          </p>
          {/* Primary CTA — only Book Now */}
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <button
              onClick={() => window.open(waBooking({ message: 'I would like to book a tour package. Please help me.' }), '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-2xl font-bold text-base transition-all hover:scale-105 shadow-lg"
            >
              📲 Book Now
            </button>
          </div>
          {/* Contact / WhatsApp / Call */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link to="/contact" className="bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/30 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              📩 Contact Us
            </Link>
            <a href="https://wa.me/918838691200" target="_blank" rel="noreferrer" className="bg-green-600/80 hover:bg-green-600 text-white border border-green-500/40 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              💬 WhatsApp
            </a>
            <a href="tel:+918838691200" className="bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/30 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              📞 8838691200
            </a>
            <a href="tel:+919442855620" className="bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/30 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              📞 9442855620
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-10">
            <span>✅ 500+ Happy Travelers</span>
            <span>✅ Best Price Guarantee</span>
            <span>✅ 24/7 Support</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-2xl z-10">↓</div>
      </section>

      {/* Wave divider */}
      <div style={{ lineHeight: 0, background: '#0a0f1e' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#0a0f1e" />
        </svg>
      </div>

      {/* Kasi Yatra Section */}
      <section className="relative py-20" style={{ backgroundImage: `linear-gradient(rgba(10,5,30,0.72), rgba(10,5,30,0.72)), url('https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <span className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block">MOST POPULAR</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">🕉️ Kasi Yatra</h2>
            <p className="text-orange-300 mb-4">Varanasi → Prayagraj → Ayodhya · 6 Days / 5 Nights</p>
            <ul className="text-gray-300 text-sm space-y-1 mb-6">
              <li>✅ Kashi Vishwanath Temple darshan</li>
              <li>✅ Ganga Aarti at Dashashwamedh Ghat</li>
              <li>✅ Prayagraj Sangam & Triveni</li>
              <li>✅ Ram Mandir, Ayodhya</li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-green-400">₹35,999</span>
              <button onClick={() => window.open(`https://wa.me/918838691200?text=${encodeURIComponent("I'm interested in Kasi Yatra (₹35,999). Please share details.")}`, '_blank')} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105">📲 Book Now</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80" alt="Kasi Yatra" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C360,80 1080,0 1440,80 L1440,80 L0,80 Z" fill="#1a0a2e" />
        </svg>
      </div>

      {/* Chardham Yatra Section */}
      <section className="relative py-20" style={{ backgroundImage: `linear-gradient(rgba(5,10,30,0.75), rgba(5,10,30,0.75)), url('https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 text-white">
            <span className="text-xs bg-teal-500 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block">BEST VALUE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">🕉️ Chardham Yatra</h2>
            <p className="text-orange-300 mb-4">Yamunotri → Gangotri → Kedarnath → Badrinath · 12 Days / 11 Nights</p>
            <ul className="text-gray-300 text-sm space-y-1 mb-6">
              <li>✅ Kedarnath Temple — Shiva's abode</li>
              <li>✅ Badrinath Dham darshan</li>
              <li>✅ Gangotri — source of Ganga</li>
              <li>✅ Yamunotri — source of Yamuna</li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-green-400">₹79,999</span>
              <button onClick={() => window.open(`https://wa.me/918838691200?text=${encodeURIComponent("I'm interested in Chardham Yatra (₹79,999). Please share details.")}`, '_blank')} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105">📲 Book Now</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&q=80" alt="Chardham Yatra" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,80 C360,0 1080,80 1440,0 L1440,80 L0,80 Z" fill="#0f0a1e" />
        </svg>
      </div>

      {/* Nepal Tour Section */}
      <section className="relative py-20" style={{ backgroundImage: `linear-gradient(rgba(5,15,10,0.75), rgba(5,15,10,0.75)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <span className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block">RECOMMENDED</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">🌄 Nepal Tour</h2>
            <p className="text-orange-300 mb-4">Kathmandu → Pokhara → Pashupatinath · 7 Days / 6 Nights</p>
            <ul className="text-gray-300 text-sm space-y-1 mb-6">
              <li>✅ Pashupatinath Temple darshan</li>
              <li>✅ Boudhanath Stupa</li>
              <li>✅ Pokhara Lake & Himalayan views</li>
              <li>✅ Everest viewpoint</li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-green-400">₹57,999</span>
              <button onClick={() => window.open(`https://wa.me/918838691200?text=${encodeURIComponent("I'm interested in Nepal Tour (₹57,999). Please share details.")}`, '_blank')} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105">📲 Book Now</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" alt="Nepal Tour" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Wave divider into categories */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z" fill="#0a0f1e" />
        </svg>
      </div>

      {/* Categories — Shiva bg with wings pattern */}
      <section
        className="py-16"
        style={{
          backgroundImage: `${WINGS_PATTERN}, ${SHIVA_OVERLAY}`,
          backgroundSize: '80px 40px, cover',
          backgroundPosition: 'center, center top',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">🕉️ Our Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">Choose Your Dream Destination</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map(cat => (
              <Link
                key={cat.label}
                to={cat.to}
                state={cat.state}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${cat.priority ? 'ring-2 ring-orange-500' : ''}`}
              >
                <img src={cat.img} alt={cat.label} className="w-full h-40 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-4">
                  <div>
                    {cat.priority && <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full mb-1 block w-fit">⭐ Featured</span>}
                    <span className="text-2xl">{cat.icon}</span>
                    <p className="text-white font-bold text-sm md:text-base mt-1">{cat.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Customer Reviews */}
      <section
        className="py-16"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 30 L5 8 L22 30 L5 52 Z' fill='rgba(13,71,161,0.18)'/%3E%3Cpath d='M60 30 L115 8 L98 30 L115 52 Z' fill='rgba(13,71,161,0.18)'/%3E%3Ccircle cx='60' cy='30' r='3' fill='rgba(13,71,161,0.12)'/%3E%3C/svg%3E")`, backgroundColor: '#0a0f1e', backgroundSize: '120px 60px' }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">⭐ Real Experiences</p>
            <h2 className="text-3xl font-bold text-white mt-1">Happy Clients — Their Stories</h2>
            <p className="text-gray-400 mt-2 text-sm">Watch what our satisfied travelers say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {[
              { url: 'https://www.youtube.com/embed/C81lBKIVtVQ', title: 'Customer Review 1' },
              { url: 'https://www.youtube.com/embed/a9E1YvR7B8s', title: 'Customer Review 2' },
            ].map((v, i) => (
              <div
                key={i}
                className="w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(255,255,255,0.04)' }}
              >
                <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0 }}>
                  <iframe
                    src={v.url}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-orange-300 text-sm font-semibold">⭐⭐⭐⭐⭐ Verified Traveler</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us — wings pattern on dark */}
      <section
        className="py-16"
        style={{
          backgroundImage: `${WINGS_PATTERN}`,
          backgroundColor: '#0a0f1e',
          backgroundSize: '120px 60px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">✈️ Why Choose Us</p>
            <h2 className="text-3xl font-bold text-white mt-1">Travel with Confidence</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: 'Best Prices', desc: 'Unbeatable deals on all packages' },
              { icon: '🛡️', title: 'Safe Travel', desc: 'Fully insured & verified operators' },
              { icon: '📞', title: '24/7 Support', desc: 'Always here when you need us' },
              { icon: '⭐', title: '5-Star Rated', desc: '500+ happy travelers trust us' },
            ].map(item => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Shiva bg with wings */}
      <section
        className="py-16"
        style={{
          backgroundImage: `${WINGS_PATTERN}, ${SHIVA_OVERLAY}`,
          backgroundSize: '80px 40px, cover',
          backgroundPosition: 'center, center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Testimonials</p>
            <h2 className="text-3xl font-bold text-white mt-1">What Our Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(t => (
              <div
                key={t.name}
                className="rounded-2xl p-5 text-white"
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div className="flex mb-2">
                  {Array(t.rating).fill(0).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-sm text-gray-300 italic mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-orange-300">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
