import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function Step({ number, title, description, isVisible }) {
  return (
    <div className={`flex transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
      <div className="mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
          {number}
        </div>
        {number < 4 && <div className="w-0.5 h-16 bg-blue-200 mx-auto mt-2"></div>}
      </div>
      <div className="mt-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-10">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selling your unused licenses is simple and secure with our 4-step process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Step
            number={1}
            title="List Your License"
            description="Tell us what software license you want to sell. We support major vendors like Microsoft, Adobe, Autodesk, and more."
            isVisible={isVisible}
          />
          <Step
            number={2}
            title="Get a Quote"
            description="Receive an instant quote based on current market demand. Our algorithm ensures you get the best possible price."
            isVisible={isVisible}
          />
          <Step
            number={3}
            title="Verify Ownership"
            description="Complete a simple verification process to confirm you own the license and have the right to transfer it."
            isVisible={isVisible}
          />
          <Step
            number={4}
            title="Get Paid"
            description="Once verified, we handle the transfer and you get paid directly to your preferred payment method within 24 hours."
            isVisible={isVisible}
          />
        </div>

        <div className="text-center mt-12">
          <button className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Selling Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
