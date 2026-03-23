import { useEffect } from 'react'

export default function useSEO({ title, description, keywords, url }) {
  useEffect(() => {
    if (title) document.title = title + ' | Saravana Travels Coimbatore'
    const set = (name, content, prop = 'name') => {
      let el = document.querySelector(`meta[${prop}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(prop, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    if (description) {
      set('description', description)
      set('og:description', description, 'property')
      set('twitter:description', description)
    }
    if (keywords) set('keywords', keywords)
    if (title) {
      set('og:title', title + ' | Saravana Travels Coimbatore', 'property')
      set('twitter:title', title + ' | Saravana Travels Coimbatore')
    }
    if (url) set('og:url', url, 'property')
  }, [title, description, keywords, url])
}
