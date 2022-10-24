import { BubblyLink } from "react-bubbly-transitions";

const Button = ({
  children,
  navigation = false,
  className,
  to = "",
  ...props
}) => {
  return (
    <>
      {navigation ? (
        <BubblyLink colorStart="#334155" colorEnd="#0F172A" to={to} {...props}>
          <div
            className={`flex items-center hover:bg-slate-500 px-4 py-2 rounded-xl ${className}`}
          >
            {children}
          </div>
        </BubblyLink>
      ) : (
        <button
          className={`flex items-center hover:bg-slate-500 px-4 py-2 rounded-xl ${className}`}
          type="button"
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
