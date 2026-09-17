export default function SectionHeading({ eyebrow, title, index, children }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {index && <span className="section-index">{index}</span>}
      {children}
    </div>
  );
}
