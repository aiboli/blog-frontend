import Head from 'next/head'
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function Home({ title, description, content }) {
  return (
    <>
      <Head>
        <title>
          Aibo Li
        </title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/home`)
  const data = await res.json()
  const title = data.title;
  const description = data.description;
  const content = data.Content;
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { title, description, content }, // will be passed to the page component as props
  }
}
