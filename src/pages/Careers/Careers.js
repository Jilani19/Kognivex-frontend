import React, { useEffect } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import styles from './Careers.module.css';

function Careers() {
  useEffect(() => {
    updateSeo({
      title: 'Careers | Kognivex',
      description: 'Join the Kognivex team. We are always looking for talented engineers and designers to help us build the future of software.',
    });
  }, []);

  return (
    <main className={styles.careersPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Careers Page – Coming Soon</h1>
          <p>We're currently scaling our engineering team. Check back soon for open positions!</p>
        </div>
      </div>
    </main>
  );
}

export default Careers;