import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div 
        className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const faqItems = [
    {
      question: "What types of software licenses can I sell?",
      answer: "SoftSell supports a wide range of software licenses including Microsoft, Adobe, Autodesk, JetBrains, Atlassian, and many more. Both perpetual licenses and subscription licenses with remaining time can be sold through our platform."
    },
    {
      question: "How quickly will I get paid?",
      answer: "After your license is verified and transferred, you'll receive payment within 24 hours for Standard accounts, and same-day for Premium and Enterprise accounts. Payments are made via your preferred method: PayPal, bank transfer, or cryptocurrency."
    },
    {
      question: "Is selling my software license legal?",
      answer: "Yes, in most cases. The first-sale doctrine allows for the resale of software licenses in many jurisdictions. However, some licenses may have specific terms that restrict transfers. Our verification process will confirm if your license is eligible for resale."
    },
    {
      question: "How do you determine the value of my license?",
      answer: "Our proprietary algorithm considers multiple factors including the software type, age, remaining subscription time, current market demand, and retail price. We constantly monitor the secondary market to ensure we offer the most competitive rates."
    },
    {
      question: "What happens if my license can't be transferred?",
      answer: "If during our verification process we determine that a license cannot be legally transferred, we'll inform you immediately with a detailed explanation. There are no fees or charges in this case."
    }
  ];
  
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
    <section id="faq" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about selling your software licenses.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => setOpenItem(openItem === index ? -1 : index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
}
