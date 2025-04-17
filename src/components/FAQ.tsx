
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export const FAQ = ({ faqs }: FAQProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
          <AccordionTrigger className="text-left font-medium py-4 hover:text-cipher-purple hover:no-underline text-white">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 py-3 font-medium">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
