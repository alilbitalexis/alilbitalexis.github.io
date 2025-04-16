export default function Badge({ lang, icon }) {
  return (
    <span>
      {icon && icon}
      {lang}
    </span>
  );
}
