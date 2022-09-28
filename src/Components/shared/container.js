import "./container.css";

export const Container = ({ children, padding }) => {
  return (
    <div
      style={{
        padding,
      }}
      className="container"
    >
      {children}
    </div>
  );
};
