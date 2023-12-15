export default function Button({ text, icon, style }) {
  return (
    <button className="card-button" style={{ ...style }}>
      {icon}
      {text}
    </button>
  );
}
