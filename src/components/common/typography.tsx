import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/classname";

const typographyVariants = cva("", {
  variants: {
    variant: {
      // Headings
      displayHeading: "text-[60px] leading-[70px] displayHeading",
      displayHeadingSemibold: "text-[60px] leading-[70px] font-semibold",
      displayHeadingBold: "text-[60px] leading-[70px] font-bold",
      displayHeadingSuperBold: "text-[60px] leading-[70px] font-[900]",

      heading1: "text-[48px] leading-[58px] heading1",
      heading1Semibold: "text-[48px] leading-[58px] font-semibold",
      heading1Bold: "text-[48px] leading-[58px] font-bold",

      heading2: "text-[36px] leading-[36px] font-millik,",
      heading2Semibold: "text-[36px] leading-[36px] font-millik font-semibold",
      heading2Bold:
        "text-[30px] leading-[40px] sm:text-[36px] sm:leading-[44px] font-bold",

      heading3: "text-[30px] leading-[40px] sm:text-[36px] heading3",
      heading3Semibold:
        "text-[30px] leading-[38px] font-semibold sm:text-[36px]",
      heading3Bold: "text-[30px] leading-[38px] font-bold sm:text-[36px]",

      heading4: "text-[22px] leading-[28px] heading4",
      heading4Semibold: "text-[22px] leading-[28px] font-semibold",
      heading4Bold: "text-[22px] leading-[28px] font-bold",

      heading5: "text-[19px] leading-[28px] heading5",
      heading5Semibold: "text-[20px] leading-[28px] font-semibold",
      heading5Bold: "text-[20px] leading-[28px] font-bold",

      // Text
      // Extra Extra Large Text
      xxlargeText: "text-[24px] leading-[30px]",
      xxlargeTextSemibold: "text-[24px] leading-[30px] font-semibold",
      xxlargeTextBold: "text-[24px] leading-[30px] font-bold",

      // Extra Large Text
      xlargeText: "text-[20px] leading-[28px]",
      xlargeTextSemibold: "text-[20px] leading-[28px] font-semibold",
      xlargeTextBold: "text-[20px] leading-[28px] font-bold",

      // Large Text
      largeText: "text-[18px] leading-[24px]",
      largeTextSemibold: "text-[18px] leading-[24px] font-semibold",
      largeTextBold: "text-[18px] leading-[24px] font-bold",

      // Base Text
      baseText: "text-[16px] leading-[22px]",
      baseTextSemibold: "text-[16px] leading-[22px] font-semibold",
      baseTextBold: "text-[16px] leading-[22px] font-bold",

      // Medium Text
      mediumText: "text-[14px] leading-[20px]",
      mediumTextSemibold: "text-[14px] leading-[20px] font-semibold",
      mediumTextBold: "text-[14px] leading-[20px] font-bold",

      // Small Text
      smallText: "text-[13px] leading-[18px]",
      smallTextSemibold: "text-[13px] leading-[18px] font-semibold",
      smallTextBold: "text-[13px] leading-[18px] font-bold",

      // Extra Small Text
      xSmallText: "text-[12px] leading-[18px]",
      xSmallTextSemibold: "text-[12px] leading-[18px] font-semibold",
      xSmallTextBold: "text-[12px] leading-[18px] font-bold",

      // Extra Extra Small Text
      xxSmallText: "text-[10px] leading-[18px]",
      xxSmallTextSemibold: "text-[10px] leading-[18px] font-semibold",
      xxSmallTextBold: "text-[10px] leading-[18px] font-bold",

      // Sub Text
      subText: "text-[11px] leading-[21px]",
      subTextSemibold: "text-[11px] leading-[21px] font-semibold",
      subTextBold: "text-[11px] leading-[21px] font-bold",

      // Capitalized Text
      capitalizedText: "text-[10px] leading-[21px] uppercase",
      capitalizedTextSemibold:
        "text-[10px] leading-[21px] font-semibold uppercase",
      capitalizedTextBold: "text-[10px] leading-[21px] font-bold uppercase",
    },
  },
  defaultVariants: {
    variant: "mediumText",
  },
});

type TypographyProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
} & VariantProps<typeof typographyVariants> &
  React.HTMLAttributes<HTMLElement>;

const Typography = ({
  as,
  variant,
  children,
  className,
  ...props
}: TypographyProps) => {
  const Component = as ? as : "p";

  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
