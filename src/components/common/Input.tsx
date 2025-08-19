import React from "react";
import clsx from "clsx";
import { cn } from "../../utils/classname.ts";
import { BiSearch } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
  FieldErrorText,
  FieldHelperText,
  FieldLabelText,
} from "./form-helpers";
import SkeletonLoader from "./skeleton-loader.tsx";
import { cva } from "class-variance-authority";
import { type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  "flex h-10 w-full rounded-full border border-midGrey bg-transparent",
  {
    variants: {
      error: {
        true: "ring-danger focus:ring-[1px] hover:ring-[1px] border-danger text-danger",
        false: "focus:ring-2 hover:ring-2 ring-primary",
      },
      leftIcon: {
        true: "pl-10",
        false: "",
      },
      rightIcon: {
        true: "pr-10",
        false: "",
      },
    },

    defaultVariants: {
      error: false,
      leftIcon: false,
      rightIcon: false,
    },
  }
);

export type InputVariantProps = VariantProps<typeof inputVariants>;

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  hint?: string;
  boldHint?: string;
  height?: string;
  searchIconSize?: number;
  iconColor?: string;
  wrapperClassName?: string;
  isLoadingField?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      error,
      leftIcon,
      rightIcon,
      label,
      hint,
      boldHint,
      className,
      type,
      wrapperClassName,
      searchIconSize,
      isLoadingField,
      iconColor,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className={cn("", wrapperClassName)}>
        <label className={clsx("flex flex-col")}>
          {label && (
            <div className={clsx("label-container font-redhat ml-4 text-green ")}>
              <FieldLabelText label={label} required={rest.required} />
            </div>
          )}
          {isLoadingField ? (
            <SkeletonLoader className="h-10 w-full rounded" />
          ) : (
            <div className={"relative flex items-center"}>
              {!!leftIcon && type !== "search" && (
                <span
                  className={clsx("", {
                    " text-primary": !error && !rest.disabled,
                    " opacity-50": rest.disabled,
                    " text-danger": error,
                  })}
                  role="icon"
                >
                  {leftIcon}
                </span>
              )}

              {type == "search" && (
                <span
                  className={clsx("absolute left-4 top-1/2 -translate-y-1/2", {
                    " text-primary": !error && !rest.disabled,
                    " opacity-50": rest.disabled,
                    " text-danger": error,
                  })}
                  role="icon"
                >
                  <BiSearch size={searchIconSize} color={iconColor ? iconColor : "inherit"} />
                </span>
              )}

              <input
                ref={ref}
                type={
                  type === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : type
                }
                className={cn(
                  "flex rounded-full focus:outline-none",
                  {
                    "": !error && !rest.disabled,
                    " border-danger border-2 text-danger ": !!error,
                    " pl-10": !!leftIcon || type === "search",
                    " pr-10": !!rightIcon || type === "password",
                  },
                  className
                )}
                {...rest}
              />

              {rightIcon && type !== "password" && (
                <span
                  className={clsx(" absolute right-4", {
                    " text-offBlack": !error && !rest.disabled,
                    " opacity-50": rest.disabled,
                    " text-danger": error,
                  })}
                  role="icon"
                >
                  {rightIcon}
                </span>
              )}

              {type === "password" && (
                <button
                  type="button"
                  className={cn(" absolute right-4 border-none outline-none", {
                    " opacity-50": rest.disabled,
                    " text-danger": error,
                  })}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowPassword((prev) => !prev);
                  }}
                >
                  {showPassword ? (
                    <BsEyeSlash size={20} color="inherit" />
                  ) : (
                    <BsEye size={20} color="inherit" />
                  )}
                </button>
              )}
            </div>
          )}
        </label>

        {error && <FieldErrorText error={error} />}
        {hint && !error && <FieldHelperText hint={hint} boldHint={boldHint} />}
      </div>
    );
  }
);

FormInput.displayName = "Input";

export default FormInput;
