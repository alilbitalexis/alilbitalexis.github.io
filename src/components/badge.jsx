export default function Badge({ lang, icon }) {
  return (
    <span>
      {icon && <span>Icon</span>}
      {lang}
    </span>
  );
}
