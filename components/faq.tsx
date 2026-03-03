import { cn } from "@/lib/utils";
import {  PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { BRAND_NAME } from "@/constants/brand";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  className?: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: `What is ${BRAND_NAME}?`,
      answer: `${BRAND_NAME} is an AI-powered toolkit for creators that helps you generate thumbnails, YouTube keywords, tags, and Instagram hashtags in seconds to grow your reach and clicks.`,
    },
    {
      id: "faq-2",
      question: "How does the AI thumbnail generator work?",
      answer:
        "Simply enter your video title or idea and choose a style. Our AI automatically generates multiple high-quality thumbnail designs that you can download or customize.",
    },
    {
      id: "faq-3",
      question: `Do I need design skills to use ${BRAND_NAME}?`,
      answer: `Not at all. ${BRAND_NAME} is built for beginners and creators. No Photoshop or design experience is required — just type your idea and the AI does the rest.`,
    },
    {
      id: "faq-4",
      question: "What file size and format are thumbnails exported in?",
      answer:
        "Thumbnails are exported in high-resolution 1280×720 (YouTube recommended size) and available in PNG or JPG format for best quality.",
    },
    {
      id: "faq-5",
      question: "How do the keyword and tag tools help my videos?",
      answer:
        "Our keyword finder shows high-search, low-competition terms so your videos can rank better. Tags and hashtags are generated automatically to improve discoverability on YouTube and Instagram.",
    },
    {
      id: "faq-6",
      question: "Is there a free plan?",
      answer:
        "Yes. You can start with our Free plan which includes limited daily generations. Upgrade anytime for more thumbnails, unlimited keywords, and premium features.",
    },
    {
      id: "faq-7",
      question: "What happens when I reach my usage limit?",
      answer:
        "If you hit your daily or monthly limit, you can wait for it to reset or upgrade to a higher plan for more or unlimited generations.",
    },
    {
      id: "faq-8",
      question: `Can I use ${BRAND_NAME} for commercial or client work?`,
      answer:
        "Yes. All generated thumbnails and assets can be used for personal, YouTube, Instagram, or commercial projects without restrictions.",
    },
    {
      id: "faq-9",
      question: "Do I need to install anything?",
      answer:
        `No installation is required. ${BRAND_NAME} works completely in your browser on desktop and mobile.`,
    },
    {
      id: "faq-10",
      question: `How is ${BRAND_NAME} different from other tools?`,
      answer:
        `Unlike other tools that only create thumbnails or keywords separately, ${BRAND_NAME} combines thumbnails, SEO keywords, tags, and hashtags into one simple platform to save time and boost growth.`,
    },
  ],

  className,
}: Faq1Props) => {
  return (
    <section className={cn("py-16 w-full", className)}>
      <div className="container max-w-3xl mx-auto px-5">
        <div className="flex justify-center ">
          <div className="border py-1 px-4 rounded-lg text-sm relative">
            <PlusIcon
              className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
              strokeWidth={1}
            />
            <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
            <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />
            FAQ
          </div>
        </div>
        <Heading>{heading}</Heading>
        <SubHeading>
          {" "}
          Find answers to common questions about our products. Can't find what
          you're looking for? Contact our support team.
        </SubHeading>
        <div className="mt-6">
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline text-md">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-md">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
