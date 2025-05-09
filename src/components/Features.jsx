import { ShieldCheck, Clock, DollarSign, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function Feature({ icon, title, description, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={featureRef}
      className={`bg-white p-6 rounded-xl shadow-md transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Sell With Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've simplified the process of selling unused software licenses, so you can get back your investment quickly and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<ShieldCheck className="h-6 w-6 text-blue-600" />}
            title="Secure Transactions"
            description="Your licenses and payment details are always protected with bank-level security and encryption."
            delay={0}
          />
          <Feature
            icon={<Clock className="h-6 w-6 text-blue-600" />}
            title="Fast Payouts"
            description="Get paid within 24 hours of your license being verified, no waiting for months."
            delay={200}
          />
          <Feature
            icon={<DollarSign className="h-6 w-6 text-blue-600" />}
            title="Best Market Rates"
            description="Our algorithm ensures you get the highest possible value for your unused licenses."
            delay={400}
          />
          <Feature
            icon={<Users className="h-6 w-6 text-blue-600" />}
            title="Verified Buyers"
            description="We only deal with verified businesses, ensuring legitimate transactions every time."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}
