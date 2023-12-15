export default function Card({ title, subtitle, body, footer, style }) {
  return (
    <div className="card" style={{...style}}>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-description">
        <p>{subtitle}</p>
      </div>
      {typeof body === "function" && body()}
      <div className="card-footer">
         {typeof footer === "function" && footer()}
      </div>
    </div>
  );
}
