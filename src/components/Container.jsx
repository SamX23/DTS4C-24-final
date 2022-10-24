const Container = ({ children, noContainer = false }) => {
  return (
    <div className="relative bg-slate-900 min-h-screen text-center text-white">
      {noContainer ? children : <div className="container">{children}</div>}
    </div>
  );
};

export default Container;
