import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi!
        </h1>

        <p className={styles.description}>
          This is an example page
        </p>

        <div className={styles.grid}>
          
          <a href="http://localhost:3000/items" className={styles.card}>
            <h3>Go to Items Page</h3>
            <p>Press to see the page</p>
          </a>
          
          <a href="http://localhost:3000/login" className={styles.card}>
            <h3>Go to Login Page</h3>
            <p>Press to see the page</p>
          </a>

          <a href="/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>         
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
