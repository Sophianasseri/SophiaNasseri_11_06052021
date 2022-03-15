import React from 'react';
import homeBanner from '../../assets/homeBanner.png';
import Banner from '../../components/Banner/Banner';
import Thumb from '../../components/Thumb/Thumb';
import data from '../../assets/accommodaton.json';
import styles from './home.module.css';

function Home() {
  return (
    <main>
      <Banner imageSrc={homeBanner}>
        <p className={styles.bannerText}>Chez vous, partout et aileurs</p>
      </Banner>
      <section className={styles.container}>
        {data.map((element) => (
          <div key={element.id}>
            <Thumb imageSrc={element.cover} title={element.title} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
