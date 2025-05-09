import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-center px-4">
      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 leading-tight">
          Sell Your Unused Software <br className="hidden md:block" />
          <span className="text-blue-600">Licenses Instantly</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          SoftSell helps you turn unused digital licenses into real money with zero hassle.
          Get up to 70% back on your investment in minutes, not months.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl">
            <span className="flex items-center justify-center">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="w-full sm:w-auto bg-white text-blue-600 border border-blue-200 px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className={`mt-16 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-sm text-gray-500 mb-4">Trusted by tech professionals from</p>
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
          <div className="h-6 text-gray-400 font-semibold">MICROSOFT</div>
          <div className="h-6 text-gray-400 font-semibold">ADOBE</div>
          <div className="h-6 text-gray-400 font-semibold">AUTODESK</div>
          <div className="h-6 text-gray-400 font-semibold">ATLASSIAN</div>
          <div className="h-6 text-gray-400 font-semibold">JETBRAINS</div>
        </div>
      </div>
    </section>
  );
}
