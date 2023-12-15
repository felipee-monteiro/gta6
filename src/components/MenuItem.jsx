/* eslint-disable react/prop-types */
export default function MenuItem({ icon, title, hoverable = true }) {
  const classname = `menu-item ${hoverable ? "hoverable" : ""}`;
  
  return (
    <div className={classname}>
      <div className="icon">{icon}</div>
      <div className="menu-title">{title}</div>
    </div>
  );
}
