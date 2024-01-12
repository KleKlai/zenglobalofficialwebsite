import { cn } from "@/lib/utils";

type CommonProps = {
    className?: React.ReactNode;
    title: string;
  };
  
  type AccordionContentTitle = {
    className?: React.ReactNode;
    title: string;
  };
  
  type AccordionContentParagraph = {
    className?: React.ReactNode;
    children: React.ReactNode;
  };
  
export const ParagraphTitle = ({ className, title }: CommonProps) => {
  return <h1 className="font-semibold text-2xl py-5">{title}</h1>;
};

export const ParagraphSubTitle = ({ className, title }: CommonProps) => {
  return <h1 className="font-semibold text-lg py-5">{title}</h1>;
};

export const ParagraphText = ({
  children,
  className,
}: AccordionContentParagraph) => {
  return <p className={cn("", className)}>{children};</p>;
};

export const AccordionContentTitle = ({
  className,
  title,
}: AccordionContentTitle) => {
  return (
    <h3
      className={cn(
        "uppercase py-4 font-semibold text-base text-zinc-800",
        className
      )}
    >
      {title}
    </h3>
  );
};

export const AccordionContentParagraph = ({
  className,
  children,
}: AccordionContentParagraph) => {
  return (
    <p className={cn("text-zinc-800 font-notoSans font-normal", className)}>
      {children};
    </p>
  );
};
