import clsx from "clsx";

const SectionTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={clsx(
        "font-millik text-green relative pb-0.5 text-center mx-auto",
        className
      )}
    >
      {title}
      <span className="absolute left-1/2 -translate-x-1/2 w-[87px] h-[3px] rounded-full bg-green bottom-0" />
    </h2>
  );
};

export default SectionTitle;
