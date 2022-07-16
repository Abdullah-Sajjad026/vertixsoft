interface PropsInterface {
  icon: any;
  count: string;
  title: string;
}

function StatsCard({icon, count, title}: PropsInterface) {
  return (
    <article className="stats-card d-flex flex-column align-items-center justify-content-end">
      <span className="stats-card-icon">{icon}</span>
      <h3 className="stats-card-count">
        {count}
        <sup>+</sup>
      </h3>
      <p className="stats-card-title lead">{title}</p>
    </article>
  );
}

export default StatsCard;
