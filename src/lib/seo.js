// Lightweight helper to set the document title and meta description per route,
// which helps Google build descriptive sitelinks for each branch page.
export function setMeta(title, description) {
  if (title) document.title = title;
  if (description) {
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);
  }
}