import clsx from "clsx";
import Typography from "./typography";
import { cn } from "../../utils/classname";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { BsInfoCircle } from "react-icons/bs";

export const FieldLabelText = ({
  label,
  info,
  required = false,
  view,
}: {
  label: string;
  required?: boolean;
  info?: string;
  view?: boolean;
}) => (
  <Typography
    variant={view ? "smallText" : "xSmallTextBold"}
    className={clsx("", view && "text-[#4B4B4B]", {
      " after:content-['*'] after:ml-0.5 after:text-danger": required,
    })}
  >
    {label}{" "}
    {info && (
      <Tooltip>
        <TooltipTrigger
          onClick={(e) => e.preventDefault()}
          className="border-none outline-none"
        >
          <BsInfoCircle strokeWidth={0.5} />
        </TooltipTrigger>

        <TooltipContent className="max-w-sm" side="bottom">
          {info}
        </TooltipContent>
      </Tooltip>
    )}
  </Typography>
);

export const FieldErrorText = ({
  error,
  className,
}: {
  error: string;
  className?: string;
}) => (
  <p className={cn("text-xs ml-4 text-red-700 font-normal ", className)}>{error}</p>
);

export const FieldHelperText = ({
  hint,
  boldHint,
}: {
  hint: string;
  boldHint?: string;
}) => (
  <span className="subTextRegular text-[#4B4B4B]">
    {hint}
    {boldHint && <b className="inline"> {boldHint}</b>}
  </span>
);
