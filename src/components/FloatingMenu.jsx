import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FloatingMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const items = [
    { icon: '📦', label: 'Packages', action: () => { navigate('/temple'); setOpen(false) } },
    { icon: '💬', label: 'WhatsApp', action: () => window.open('https://wa.me/918838691200', '_blank') },
    { icon: '📞', label: 'Call Now', action: () => window.open('tel:+918838691200') },
    { icon: '📩', label: 'Contact', action: () => { navigate('/contact'); setOpen(false) } },
  ]

  return (
    <div className="md:hidden fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Menu items */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl py-2 px-1 flex flex-col gap-1 min-w-[180px]">
          {items.map(item => (
            <button
              key={item.label}
              onClick={item.action}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-800 font-semibold text-sm transition-colors w-full text-left"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
        style={{ background: open ? '#1f2937' : '#f97316' }}
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
  )
}
