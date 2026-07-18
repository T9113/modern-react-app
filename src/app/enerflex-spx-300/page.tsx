import Image from 'next/image';
import type { Metadata } from 'next';
import ProductLiterature from '@/components/ProductLiterature';
import ProductContactSection from '@/components/ProductContactSection';
import PageHeader from '@/components/PageHeader';
import ProductHero from '@/components/ProductHero';
import { spx300Docs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'EnerFlex SPX 300 | 100% Silicone Roof Coating',
  description:
    'EnerFlex SPX 300 is a premium high-solids Next-Generation Silicone roof coating for waterproofing, UV protection, and cool roof performance in demanding climates.',
  path: '/enerflex-spx-300',
  keywords: ['EnerFlex SPX 300', 'silicone roof coating', 'high solids silicone'],
});

const sp300JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerFlex SPX 300",
  "description": "EnerFlex SPX 300 is a premium high-solids silicone roof coating for waterproofing, UV protection, and cool roof performance in demanding climates.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "image": "https://enercon-group.com/images/products/spx300/product.webp",
  "url": "https://enercon-group.com/enerflex-spx-300",
  "category": "Silicone Roof Coating"
};

export default function SP300Page() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sp300JsonLd) }} />
      <PageHeader
        title="EnerFlex SPX 300"
        subtitle="Next-Generation Silicone Coating"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <ProductHero
          imageSrc="/images/products/spx300/product.webp"
          imageAlt="EnerFlex SPX 300"
        >
          <h4>Built Tough. Stays Flexible. Last Longer</h4>
          <h5>Premium Formulation</h5>
          <p className="key-features-label">Key Features:</p>
          <ul>
            <li>Rain safe in 15 minutes</li>
            <li>100% Silicone moisture cure technology</li>
            <li>Dried film resists algae and fungal growth</li>
            <li>Excellent adhesion and ponding water resistance</li>
            <li>Dirt pickup resistance formula - Stays whiter and brighter</li>
          </ul>
        </ProductHero>

        {/* Banner Label */}
        <div className="product-label-container product-label-sp300">
          <Image src="/images/products/spx300/banner.webp" alt="EnerFlex SPX 300 Banner" width={800} height={200} className="image-full-auto" />
        </div>

        {/* Full-width Image */}
        <div className="product-full-image">
          <Image src="/images/products/spx300/content-image.webp" alt="EnerFlex SPX 300 Application" width={1200} height={500} className="image-full-contain-20" />
        </div>

        {/* Description */}
        <div className="product-description">
          <p>
            EnerFlex SPX 300 is ENERCON&apos;s next-generation 100% silicone roof waterproof coating engineered for superior adhesion, weather resistance, and ponding water protection — delivering unmatched flexibility and longterm performance for residential and commercial roofs under extreme weather conditions EnerFlex SPX 300 new formulation offers dirt pickup resistance. dried firm resists algae and fungal growth which keeps coating white & bright and last longer. 
          {/* <p>
            EnerFlex SPX 300 is a premium formulation, 100% silicone, fluid-applied, moisture-cure coating designed to provide excellent waterproofing, even against ponding water. It reflects incident sunlight, making it a top-of-the-line cool roof and UV-resistant coating. Its premium formulation makes it suitable for use in all types of climatic conditions. The 100% silicone chemistry is especially well-suited for extreme tropical environments, exposed to some of the hottest and wettest weather with intense UV exposure. The premium formulation enables it to maintain the highest possible solar reflectivity even after it ages and ensures excellent adhesion with almost all types of substrates. */}
          </p>
        </div>

        {/* Mockup Image */}
        <div className="product-full-image">
          <Image src="/images/products/spx300/mockup.webp" alt="EnerFlex SPX 300 Mockup" width={1200} height={600} className="image-full-cover-20" />
        </div>

        <ProductLiterature docs={spx300Docs} />

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </div>
  );
}
