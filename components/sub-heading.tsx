import { cn } from "@/lib/utils";
import { ReactNode } from "react";


interface SubHeadingProps {
  children: ReactNode;
  className?: string;
}

const SubHeading = ({ children, className }: SubHeadingProps) => {
  return (
    <p
      className={cn(
        " text-md md:text-lg lg:text-xl max-w-2xl mb-8 text-center text-muted-foreground mt-3 mx-auto ",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default SubHeading;
