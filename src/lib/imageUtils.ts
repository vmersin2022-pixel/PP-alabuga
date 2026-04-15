import { getSupabaseImageUrl } from './supabase';

export function getProxyImageUrl(url: string) {
  if (!url) return url;
  
  // If it's a relative path or just a filename, assume it's in Supabase 'images' bucket
  if (!url.startsWith('http')) {
    return getSupabaseImageUrl(url);
  }
  
  // Ensure we use HTTPS for external links
  const secureUrl = url.replace(/^http:\/\//, 'https://');
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // On mobile — direct link, no proxy to avoid Safari/CORS issues
  if (isMobile) return secureUrl;

  // On desktop — use proxy for caching and optimization
  return `https://images.weserv.nl/?url=${encodeURIComponent(secureUrl)}&default=${encodeURIComponent(secureUrl)}&w=800&q=80&n=-1`;
}
