import Accordion from "./Accordion";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use ShopBook?",
      answer:
        "We promise you high quality books delivered immediately to your email address with the correct ISBN number and a 24-hour guaranty and refund space.",
    },
    {
      id: 2,
      question: "Can I access my ebook on mobile?",
      answer:
        "Yes you can access your ebook on mobile. Just download it from your email using your mobile dvice - android, iphone or Amazon fire tablets.",
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "Yes we do but only for the first 24 hours after that a certain percentage will be deducted.",
    },
    {
      id: 4,
      question: "Do you support international payments?",
      answer:
        "Yes we do. You can pay using MasterCard, Paypal, Applepay and every other secured payment platforms and gateway.",
    },
  ];
  return (
    <section className=" mt-5">
      <h1 className="font-bold underline text-center text-black dark:text-white text-3xl">
        Question in Mind
      </h1>
      <div>
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
