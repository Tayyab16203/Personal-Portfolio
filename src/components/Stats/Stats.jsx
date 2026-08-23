import statsIcon1 from '../../assets/images/stats-card_icon-1.png';
import statsIcon2 from '../../assets/images/stats-card_icon-2.png';
import statsIcon3 from '../../assets/images/stats-card_icon-3.png';

const statsData = [
  {
    icon: statsIcon1,
    iconAlt: 'Badge icon',
    number: '2+',
    label: 'Years of Experience',
  },
  {
    icon: statsIcon2,
    iconAlt: 'Checkmark icon',
    number: '20+',
    label: 'Completed Projects',
  },
  {
    icon: statsIcon3,
    iconAlt: 'Peoples rating icon',
    number: '10+',
    label: 'Happy Clients',
  },
];

const Stats = () => {
  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        {statsData.map((stat, index) => (
          <li key={index}>
            <a href="#" className="stats-card">
              <div className="card-icon">
                <img src={stat.icon} alt={stat.iconAlt} />
              </div>
              <h2 className="h2 card-title">
                {stat.number} <strong>{stat.label}</strong>
              </h2>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
