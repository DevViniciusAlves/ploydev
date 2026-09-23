import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/site.js';

export default function SEO({
  title,
  description = SITE.description,
  path = '/',
  image = '/ploydev-logo.png',
  type = 'website',
  noindex = false,
  schema,
}) {
  const canonical = `${SITE.url}${path === '/' ? '' : path}`;

  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}
