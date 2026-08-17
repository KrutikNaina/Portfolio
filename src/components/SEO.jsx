import { Helmet } from "react-helmet";

const SEO = () => (
  <Helmet>
    {/* Basic Meta */}
    <title>CASE FILE #KN-2025: Krutik Naina | Full-Stack Architect</title>
    <meta name="description" content="Official case file and developer portfolio of Krutik Naina, showcasing full-stack infrastructure, AI query engines, and cloud systems." />
    <meta name="keywords" content="Krutik Naina, Full-Stack Developer, React, Node.js, Portfolio, Software Engineer, System Architect" />
    <meta name="author" content="Krutik Naina" />

    {/* Open Graph / Social Sharing */}
    <meta property="og:title" content="CASE FILE #KN-2025: Krutik Naina | Full-Stack Architect" />
    <meta property="og:description" content="Explore the confidential case files, technical architecture, and systems engineered by Krutik Naina." />
    <meta property="og:url" content="https://krutiknaina.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://krutiknaina.com/og-image.jpg" />

    {/* JSON-LD Structured Data */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Krutik Naina",
          "url": "https://krutiknaina.com/",
          "image": "https://krutiknaina.com/images/profile.jpg",
          "sameAs": [
            "https://github.com/krutiknaina",
            "https://linkedin.com/in/krutik-naina"
          ],
          "jobTitle": "Web Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance / Personal Projects"
          },
          "description": "Krutik Naina is a creative web developer passionate about frontend technologies and building modern websites.",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://krutiknaina.com/"
          }
        }
      `}
    </script>
  </Helmet>
);

export default SEO;
