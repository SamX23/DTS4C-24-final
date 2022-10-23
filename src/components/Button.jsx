const Button = ({ children, ...props }) => {
  return (
    <button
      className="flex items-center hover:bg-slate-500 px-4 py-2 rounded-xl"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
