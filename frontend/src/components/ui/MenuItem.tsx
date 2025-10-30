interface MenuItem {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export default function MenuItem({ icon, title, url }: MenuItem) {
  return (
    <a className="icon flex items-center gap-1" href={url}>
      {icon}
      <span className="font-semibold">{title}</span>
    </a>
  );
}
