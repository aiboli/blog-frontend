import AppLayout from '../../components/AppLayout';
import styles from '../../styles/articles.module.css';

export default function Articles({ notFound, artitles }) {
    console.log(artitles);
    return (
        <AppLayout>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.titleContainer}>
                        <h2>Articles</h2>
                    </div>
                    {notFound ? (<p>No Articles :(</p>) : (
                        <div className={styles.articlesContainer}>
                            {artitles?.map(article => {
                                let date = new Date(article.created_at);
                                return (
                                    <div key={article.id} className={styles.articleContainer}>
                                        <h3><a href={'/articles/' + article.id}>{article.title}</a></h3>
                                        <h5>{date.toLocaleDateString("en-US")}</h5>
                                    </div>
                                )
                            })
                            }
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:1337/articles`);
    const data = await res.json();
    console.log(data);
    if (!data || !data.length || data.length < 1) {
        return {
            props: {
                notFound: true
            }
        }
    }
    return {
        props: {
            artitles: data
        },
        revalidate: 1
    };
}
