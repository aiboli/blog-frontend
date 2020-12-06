import Head from 'next/head'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import ReactMarkdown from 'react-markdown';

export default function Home({ title, description, content }) {
  return (
    <>
      <Head>
        <title>
          Aibo Li - Blog
        </title>
        <meta charset="UTF-8" />
        <meta name="description" content="Aibo Li Tech blog" />
        <meta name="keywords" content="HTML JS javascript Tech personal blog Aibo Li aibolilab React css strapi nextjs next ymf aiboli developer software" />
        <meta name="author" content="Aibo Li" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.titleContiner}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.titleDescription}>{description}</p>
          {content.map(item => {
            return (<div key={item.id} className={styles.contentContainer}>
              <div className={styles.contentTitle}>
                <h3 className={styles.contentTitleText}>{item.title}</h3>
              </div>
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </div>)
          })}
        </div>
      </div>
      <Footer></Footer>
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
    revalidate: 1,
  }
}
