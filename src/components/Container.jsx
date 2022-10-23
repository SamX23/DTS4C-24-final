const Container = ({ children }) => {
  return (
    <div className="relative bg-slate-900 min-h-screen p-2 text-center text-white">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
