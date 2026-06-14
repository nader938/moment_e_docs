import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import clsx from 'clsx';

function Card({ emoji, title, description, to, badge, large }) {
  const inner = (
    <>
      {emoji && <span className={styles.emoji}>{emoji}</span>}
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.desc}>{description}</p>}
      {badge && <span className={styles.badge}>{badge}</span>}
    </>
  );
  return to ? (
    <Link className={clsx(styles.card, large && styles.large)} to={to}>
      {inner}
    </Link>
  ) : (
    <div className={clsx(styles.card, styles.static, large && styles.large)}>
      {inner}
    </div>
  );
}

export default function DocCardGrid({ cards, large }) {
  return (
    <div className={clsx(styles.grid, large && styles.large)}>
      {cards.map((card) => (
        <Card key={card.title} large={large} {...card} />
      ))}
    </div>
  );
}
