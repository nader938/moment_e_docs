import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    emoji: '🔒',
    title: 'Encrypted & Secure',
    description:
      'All responses, sensor readings, and task results are AES-256 encrypted before upload to AWS S3.',
  },
  {
    emoji: '⌚',
    title: 'Apple Watch Integration',
    description:
      'Continuous heart-rate and HRV monitoring streamed in real time via HealthKit.',
  },
  {
    emoji: '🧠',
    title: 'Cognitive Assessments',
    description:
      'Validated tasks built in: Flanker, Heartbeat Counting, Scrambled Sentences, and more.',
  },
];

const quickLinks = [
  { emoji: '📲', label: 'Install', to: '/install', description: 'iOS & Android' },
  { emoji: '📖', label: 'Using the App', to: '/using', description: 'Tasks & sign-in' },
  { emoji: '📱', label: 'App Screens', to: '/screens', description: 'Visual guide' },
  { emoji: '📚', label: 'Modules', to: '/modules', description: 'Distress Tolerance & more' },
  { emoji: '🎬', label: 'Video Guides', to: '/videos', description: 'Walkthroughs' },
  { emoji: '🐛', label: 'Report a Bug', to: '/report', description: 'Submit an issue' },
];

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.heroEyebrow}>CUTA Lab · San Diego State University</p>
        <h1 className={styles.heroTitle}>moment·e</h1>
        <p className={styles.heroTagline}>
          Research-grade EMA, built for the real world.
        </p>
        <p className={styles.heroSub}>
          A mobile research app for iOS and Android that captures real-time data on
          mental health, behavior, and physiology — wherever participants are.
        </p>
        <div className={styles.heroCtas}>
          <Link className={styles.ctaIos} to="/install">
            📱 Install on iOS
          </Link>
          <Link className={styles.ctaAndroid} to="/install">
            🤖 Install on Android
          </Link>
        </div>
        <p className={styles.heroRequirements}>iOS 13+ · Android 8.0+ · v13.04</p>
      </div>
    </div>
  );
}

function FeatureCard({ emoji, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureEmoji}>{emoji}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </div>
  );
}

function QuickLinkCard({ emoji, label, to, description }) {
  return (
    <Link className={styles.quickCard} to={to}>
      <span className={styles.quickEmoji}>{emoji}</span>
      <span className={styles.quickLabel}>{label}</span>
      <span className={styles.quickDesc}>{description}</span>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore the Docs</h2>
          <div className={styles.quickGrid}>
            {quickLinks.map((l) => (
              <QuickLinkCard key={l.label} {...l} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
