export default function RollingText({ children }) {
  return (
    <span className="rolling-text">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}
