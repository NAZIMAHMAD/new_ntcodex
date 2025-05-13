import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://www.example.com' });

const writeStream = createWriteStream('./public/sitemap.xml');
const readable = Readable.from(links);

readable.pipe(sitemapStream).pipe(writeStream);
