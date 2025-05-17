export const faqs = [
  {
    q: 'Are these solutions applicable to me if I am operating a co-location?',
    a: 'Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.',
  },
  {
    q: 'How do you ensure data privacy and security?',
    a: 'We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.',
  },
  {
    q: 'How does pricing work?',
    a: 'Depending on your requirements, we offer flexible pricing models.',
  },
  {
    q: 'Do you provide ongoing support and maintenance for your solutions?',
    a: 'Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.',
  },
  {
    q: 'How do I get started?',
    a: 'Set up a demo and we\'ll guide you through our offerings and start a trial!',
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-[#18181b] py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white text-center">Frequently asked questions</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-700 rounded-full mb-8" />
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4">
            <div className="font-semibold text-white mb-1">{faq.q}</div>
            <div className="text-gray-400 text-base">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 