import { PageHeader, Badge } from '../components/ui';

export default function FAQ() {
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is touch rugby?",
          answer: "Touch rugby is a non-contact variant of rugby where players are 'touched' rather than tackled. It's a fast-paced, inclusive sport suitable for all ages and skill levels, emphasizing speed, agility, and teamwork."
        },
        {
          question: "Do I need experience to join a league?",
          answer: "Not at all! We welcome players of all skill levels, from complete beginners to experienced players. Many of our leagues have divisions for different skill levels, and we provide coaching and support for new players."
        },
        {
          question: "What equipment do I need?",
          answer: "Touch rugby requires minimal equipment. You'll need comfortable athletic clothing, rugby boots or sports shoes with good grip, and a water bottle. Some leagues provide jerseys, while others may require you to purchase team gear."
        }
      ]
    },
    {
      category: "Leagues",
      questions: [
        {
          question: "How do I join a league?",
          answer: "Browse our leagues page to find a league that suits your location, skill level, and schedule. Click 'Join League' and follow the registration process. You'll receive confirmation and further details via email."
        },
        {
          question: "What's the difference between 6 Down, One Touch, and Beach Touch?",
          answer: "6 Down is traditional touch rugby where teams have 6 touches before turnover. One Touch is faster-paced with only 1 touch before passing. Beach Touch is played on sand with modified rules for the beach environment."
        },
        {
          question: "How much does it cost to join a league?",
          answer: "League fees vary depending on the format, duration, and location. Fees typically range from R250-R350 per player per season and cover field rental, referees, and administrative costs. Check individual league pages for specific pricing."
        },
        {
          question: "Can I join multiple leagues?",
          answer: "Yes! Many players participate in multiple leagues. Just ensure you can commit to the training and game schedules. Some leagues offer discounts for players joining multiple competitions."
        }
      ]
    },
    {
      category: "Events",
      questions: [
        {
          question: "How do I register for tournaments?",
          answer: "Visit our events page to see upcoming tournaments. Click on the event you're interested in and follow the registration process. Early registration often comes with discounted fees."
        },
        {
          question: "Can I register as an individual or do I need a team?",
          answer: "This depends on the specific event. Some tournaments accept individual registrations and will place you on a team, while others require pre-formed teams. Check the event details for specific requirements."
        },
        {
          question: "What happens if an event is cancelled?",
          answer: "In case of cancellation due to weather or other circumstances, we'll notify all registered participants immediately. Full refunds are provided for cancelled events, or you can transfer your registration to a future event."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "I'm having trouble with registration. What should I do?",
          answer: "If you're experiencing technical difficulties, try clearing your browser cache and cookies, or try a different browser. If problems persist, contact our support team at support@touchies.co.za with details about the issue."
        },
        {
          question: "How do I update my profile information?",
          answer: "Once logged in, go to your profile page where you can update your personal information, contact details, and communication preferences. Changes are saved automatically."
        },
        {
          question: "Can I get a refund if I can't attend an event?",
          answer: "Refund policies vary by event and timing. Generally, cancellations made more than 7 days before an event are eligible for a full refund minus processing fees. Check the specific event's terms and conditions."
        }
      ]
    }
  ];

  return (
    <main className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about touch rugby, leagues, events, and our platform."
        />

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-black">{category.category}</h2>
                <Badge variant="secondary" size="sm">
                  {category.questions.length} questions
                </Badge>
              </div>
              
              <div className="space-y-6">
                {category.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className="bg-gray-light rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-black mb-3 flex items-start">
                      <span className="text-primary mr-3 text-xl">Q:</span>
                      {faq.question}
                    </h3>
                    <div className="ml-8">
                      <span className="text-primary font-semibold mr-3">A:</span>
                      <span className="text-gray leading-relaxed">{faq.answer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="mt-16 bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly support team is here to help. 
            Get in touch and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary-light active:bg-primary-dark transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Support
            </a>
            <a 
              href="mailto:support@touchies.co.za" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-black active:bg-primary-dark active:text-white transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Email Us
            </a>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/leagues" className="text-primary hover:text-primary-light font-medium">
              Browse Leagues
            </a>
            <span className="text-gray">•</span>
            <a href="/events" className="text-primary hover:text-primary-light font-medium">
              Upcoming Events
            </a>
            <span className="text-gray">•</span>
            <a href="/news" className="text-primary hover:text-primary-light font-medium">
              Latest News
            </a>
            <span className="text-gray">•</span>
            <a href="/contact" className="text-primary hover:text-primary-light font-medium">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}