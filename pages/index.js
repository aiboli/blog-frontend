import AppLayout from "../components/AppLayout";
import styles from "../styles/Home.module.css";
import ReactMarkdown from "react-markdown";

export default function Home({ title, description, content }) {
  return (
    <AppLayout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.titleContiner}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.titleDescription}>{description}</p>
          {content.map((item) => {
            return (
              <div key={item.id} className={styles.contentContainer}>
                <div className={styles.contentTitle}>
                  <h3 className={styles.contentTitleText}>{item.title}</h3>
                </div>
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/home`);
  const data = await res.json();
  const title = data.title;
  const description = data.description;
  const content = data.Content;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { title, description, content }, // will be passed to the page component as props
    revalidate: 1,
  };
}
