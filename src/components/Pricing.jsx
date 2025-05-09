import { Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const commissionRates = [
  { type: "Standard", rate: "15%", threshold: "$0 - $5,000", isPopular: false },
  { type: "Premium", rate: "10%", threshold: "$5,001 - $20,000", isPopular: true },
  { type: "Enterprise", rate: "7%", threshold: "$20,001+", isPopular: false },
];

function PricingCard({ type, rate, threshold, isPopular, features, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl shadow-md overflow-hidden border transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isPopular ? 'border-blue-500 scale-105 md:scale-110' : 'border-gray-200'}`}
    >
      {isPopular && (
        <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{type}</h3>
        <p className="text-gray-600 text-sm mb-4">{threshold} in sales</p>
        
        <div className="mb-6">
          <p className="text-4xl font-bold text-gray-900">{rate}</p>
          <p className="text-gray-600">commission fee</p>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
          isPopular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We only earn when you sell. No upfront fees, no hidden costs, just a straightforward commission on successful sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            type="Standard"
            rate="15%"
            threshold="$0 - $5,000"
            isPopular={false}
            features={[
              "Instant quotes",
              "24-hour payouts",
              "Secure transactions",
              "Basic license verification",
              "Email support"
            ]}
            delay={0}
          />
          <PricingCard 
            type="Premium"
            rate="10%"
            threshold="$5,001 - $20,000"
            isPopular={true}
            features={[
              "All Standard features",
              "Priority verification",
              "Same-day payouts",
              "Dedicated account manager",
              "Phone support"
            ]}
            delay={200}
          />
          <PricingCard 
            type="Enterprise"
            rate="7%"
            threshold="$20,001+"
            isPopular={false}
            features={[
              "All Premium features",
              "Custom payment terms",
              "Bulk license processing",
              "API access",
              "24/7 priority support"
            ]}
            delay={400}
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for larger volumes?</p>
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Contact our sales team
          </button>
        </div>
      </div>
    </section>
  );
}
