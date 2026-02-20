import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "./heading";
import SubHeading from "./sub-heading";

export function CallToAction() {
  return (
    <section className="px-5">
      <div className="relative my-12 mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
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

        <div className="space-y-1">
          <Heading>Start Creating High-Converting Thumbnails Today</Heading>
          <SubHeading>
            Create better thumbnails, discover winning keywords, and scale your
            content with AI.
          </SubHeading>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button className="border border-neutral-300" variant="outline">
            Contact Sales
          </Button>
          <Button>
            Get Started <ArrowRightIcon className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
