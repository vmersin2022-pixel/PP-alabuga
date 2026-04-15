export function getProxyImageUrl(url: string) {
  if (!url || !url.startsWith('http')) return url;
  
  // Ensure we use HTTPS
  const secureUrl = url.replace(/^http:\/\//, 'https://');
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // On mobile — direct link, no proxy to avoid Safari/CORS issues
  if (isMobile) return secureUrl;

  // On desktop — use proxy for caching and optimization
  // Using weserv.nl with quality and width parameters
  return `https://images.weserv.nl/?url=${encodeURIComponent(secureUrl)}&default=${encodeURIComponent(secureUrl)}&w=800&q=80&n=-1`;
}
