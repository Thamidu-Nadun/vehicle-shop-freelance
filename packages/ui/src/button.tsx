export const Button = ({
  name,
  variant = "primary",
  props,
}: {
  name: string;
  variant?: "primary" | "secondary";
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  if (variant === "primary") {
    return (
      <BaseButton
        name={name}
        className="ui:bg-orange-500 ui:text-white ui:hover:bg-orange-600"
        {...props}
      />
    );
  } else if (variant === "secondary") {
    return (
      <BaseButton
        name={name}
        className="ui:border ui:text-gray-800 ui:rounded-md ui:hover:bg-orange-500 ui:hover:text-white"
        {...props}
      />
    );
  } else {
    return (
      <BaseButton
        name={name}
        className="ui:bg-gray-200 ui:text-gray-800 ui:rounded-md ui:hover:bg-gray-300"
        {...props}
      />
    );
  }
};

const BaseButton = ({
  name,
  className,
  ...props
}: {
  name: string;
  className: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`${className} ui:px-4 ui:py-2 ui:rounded-lg ui:transition-colors ui:duration-300`}
      {...props}
    >
      {name}
    </button>
  );
};
