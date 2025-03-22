import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
{
  title: 'Thai-Massage Verzeichnis',
  Webp: require('@site/static/img/verzeichnis.webp').default,
  description: (
    <>
      Finden Sie Thai-Massage Studios. Auf Thai-Massage.de sind mehr als 4.000 Studios aus ganz Deutschland gelistet.
      <div style={{ marginTop: '1rem' }}>
        <a
          className="button button--secondary button--lg"
          href="https://thai-massage.de"
          target="_blank"
        >
          Zur Hauptseite
        </a>
      </div>
    </>
  ),
},
];

function Feature({Webp, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={Webp} className={styles.featureWebp} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
