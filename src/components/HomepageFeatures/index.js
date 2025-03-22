import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
{
  title: 'Blog rund um Thai Massage',
  Webp: require('@site/static/img/verzeichnis.webp').default,
  description: (
    <>
      Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
      ahead and move your docs into the <code>docs</code> directory.
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
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
