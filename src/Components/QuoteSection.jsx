import React, { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const quotes = [
  {
    text: "At Book My Records, we believe that clear financial records are the foundation of every successful business. Our goal is to empower entrepreneurs by providing them with the tools and support they need to grow confidently and compliantly.",
    author: "Saket Rathore",
  },
  {
    text: "We envision a future where every business owner has complete clarity over their finances, enabling smarter decisions and sustainable growth.",
    author: "Saket Rathore",
  },
  {
    text: "Our mission is to simplify accounting for entrepreneurs so they can focus on what truly matters—building their business.",
    author: "Saket Rathore",
  },
];

const QuoteSection = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Meet Our Founder</h2>
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-10"></div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg relative">
        <Quote className="w-8 h-8 text-blue-500 absolute left-6 top-6" />
        <p className="text-lg text-gray-700 leading-relaxed pl-12">
          "{quotes[index].text}"
        </p>
        <p className="text-right font-semibold text-blue-600 mt-6">
          — {quotes[index].author}
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default QuoteSection;
