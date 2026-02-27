export function setMeta(tags: { title?: string; description?: string; url?: string; image?: string }) {
  // default the url to the current location if omitted (helps avoid forgetting it
  // when calling setMeta; also ensures canonical always has a value)
  if (!tags.url && typeof window !== 'undefined') {
    tags.url = window.location.href;
  }

  // make sure image URLs are absolute; some social scrapers require a full URL
  if (tags.image) {
    const site = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    if (site && tags.image.startsWith('/')) {
      tags.image = site + tags.image;
    }
  }

  if (tags.title) document.title = tags.title;

  function upsert(name: string, attr: 'name' | 'property', content?: string) {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  upsert('description', 'name', tags.description);
  upsert('og:title', 'property', tags.title);
  upsert('og:description', 'property', tags.description);
  upsert('og:type', 'property', 'website');
  upsert('og:url', 'property', tags.url);
  upsert('og:image', 'property', tags.image);
  upsert('twitter:card', 'name', 'summary_large_image');
  upsert('twitter:title', 'name', tags.title);
  upsert('twitter:description', 'name', tags.description);
  upsert('twitter:image', 'name', tags.image);

  // ensure a canonical link tag is present when a URL is supplied
  if (tags.url) {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', tags.url);
  }
}
