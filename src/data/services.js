// Full content for the individual service pages, keyed by slug.
// The short nav/footer version lives in site.js.

export const serviceDetails = {
  'web-development': {
    n: '01',
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Fast, modern websites and web apps that convert.',
    intro:
      'We design and build high-performance websites and web applications with modern, maintainable stacks. From marketing sites to complex product interfaces — engineered to be fast, accessible, and easy to grow.',
    tags: ['Marketing sites', 'Web apps', 'E-commerce', 'Headless'],
    stat: { value: '90+', label: 'Average Lighthouse score we ship' },
    deliverables: [
      {
        title: 'Custom design & build',
        desc: 'Bespoke interfaces built from scratch — no bloated templates, no compromises.',
      },
      {
        title: 'Responsive & accessible',
        desc: 'Pixel-perfect across every device, and WCAG-conscious so everyone can use it.',
      },
      {
        title: 'Performance obsessed',
        desc: 'Optimized for Core Web Vitals — fast loads that keep users and Google happy.',
      },
      {
        title: 'Integrations',
        desc: 'Payments, CRMs, analytics, CMS, and any third-party API your product needs.',
      },
      {
        title: 'Scalable architecture',
        desc: 'Clean, componentized code that your team can extend without a rebuild.',
      },
      {
        title: 'Launch & support',
        desc: 'Deployment, monitoring, and ongoing maintenance after you go live.',
      },
    ],
    process: [
      { n: '01', title: 'Discover', desc: 'Goals, users, and requirements — we scope the build precisely.' },
      { n: '02', title: 'Design', desc: 'Wireframes to polished UI, reviewed with you at each step.' },
      { n: '03', title: 'Build', desc: 'Tested, iterative development with weekly progress you can see.' },
      { n: '04', title: 'Launch', desc: 'Deploy, measure, and optimize for real-world performance.' },
    ],
    tools: [
      { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
      { group: 'Backend', items: ['Node.js', 'PostgreSQL', 'GraphQL'] },
      { group: 'Platform', items: ['Vercel', 'AWS', 'Cloudflare'] },
    ],
  },

  'cms-development': {
    n: '02',
    slug: 'cms-development',
    title: 'CMS Development',
    tagline: 'Content platforms your team actually loves to use.',
    intro:
      'We build custom and headless CMS solutions that put your team in control — flexible content models, intuitive editing, and rock-solid security. Publish confidently without waiting on a developer.',
    tags: ['WordPress', 'Headless CMS', 'Migrations', 'E-commerce'],
    stat: { value: '5×', label: 'Faster content updates for editors' },
    deliverables: [
      {
        title: 'Custom CMS builds',
        desc: 'Tailored content models that match how your team actually works.',
      },
      {
        title: 'WordPress & headless',
        desc: 'From polished WordPress to modern headless setups with any frontend.',
      },
      {
        title: 'Editor workflows',
        desc: 'Intuitive, guardrailed editing so publishing is fast and mistake-proof.',
      },
      {
        title: 'Seamless migrations',
        desc: 'Move from a legacy platform with content, SEO, and URLs intact.',
      },
      {
        title: 'Training & docs',
        desc: 'We hand over a system your team knows how to use with confidence.',
      },
      {
        title: 'Maintenance & security',
        desc: 'Updates, backups, and hardening to keep your platform safe and current.',
      },
    ],
    process: [
      { n: '01', title: 'Audit', desc: 'We map your content, workflows, and everything you need to publish.' },
      { n: '02', title: 'Model', desc: 'Design flexible content structures and editor experiences.' },
      { n: '03', title: 'Build', desc: 'Develop the CMS, integrations, and migrate your content.' },
      { n: '04', title: 'Enable', desc: 'Train your team and support them after handover.' },
    ],
    tools: [
      { group: 'Platforms', items: ['WordPress', 'Sanity', 'Strapi', 'Contentful'] },
      { group: 'Backend', items: ['PHP', 'Node.js', 'MySQL'] },
      { group: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS'] },
    ],
  },

  seo: {
    n: '03',
    slug: 'seo',
    title: 'SEO',
    tagline: 'Data-driven search optimization that grows revenue.',
    intro:
      'We turn organic search into a dependable growth channel — technical fixes, on-page optimization, and a content strategy grounded in real data. Rankings are the means; qualified traffic and revenue are the goal.',
    tags: ['Technical SEO', 'On-page', 'Content', 'Local SEO'],
    stat: { value: '2×', label: 'Typical organic traffic within 6 months' },
    deliverables: [
      {
        title: 'Technical audit',
        desc: 'Crawlability, speed, indexing, and structure — we fix what holds you back.',
      },
      {
        title: 'On-page optimization',
        desc: 'Titles, metadata, internal linking, and content tuned to rank and convert.',
      },
      {
        title: 'Content strategy',
        desc: 'Keyword-led planning that targets the terms your buyers actually search.',
      },
      {
        title: 'Authority building',
        desc: 'Ethical link acquisition and digital PR that grows your domain authority.',
      },
      {
        title: 'Local SEO',
        desc: 'Google Business Profile, citations, and local intent for nearby customers.',
      },
      {
        title: 'Analytics & reporting',
        desc: 'Clear dashboards tying rankings and traffic to business outcomes.',
      },
    ],
    process: [
      { n: '01', title: 'Audit', desc: 'A full technical and content baseline of where you stand.' },
      { n: '02', title: 'Strategy', desc: 'A prioritized roadmap targeting your highest-value keywords.' },
      { n: '03', title: 'Execute', desc: 'Technical fixes, content, and authority building — shipped monthly.' },
      { n: '04', title: 'Report', desc: 'Transparent reporting and continuous optimization.' },
    ],
    tools: [
      { group: 'Analytics', items: ['GA4', 'Search Console', 'Looker Studio'] },
      { group: 'Research', items: ['Ahrefs', 'Semrush'] },
      { group: 'Technical', items: ['Screaming Frog', 'PageSpeed', 'Schema.org'] },
    ],
  },
}

export const serviceOrder = ['web-development', 'cms-development', 'seo']
