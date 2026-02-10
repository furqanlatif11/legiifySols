export function setMeta(tags: { title?: string; description?: string; url?: string; image?: string }) {
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
}
