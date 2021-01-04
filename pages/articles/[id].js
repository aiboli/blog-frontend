import AppLayout from '../../components/AppLayout';
import styles from '../../styles/Article.module.css';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


export default function Article({ notFound, article }) {
    const router = useRouter();
    const [en, setEn] = useState(true);

    function changeLanguage() {
        if (en === true) {
            setEn(false);
        } else {
            setEn(true);
        }
    }

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <AppLayout>
            <div className={styles.container}>
                <div className={styles.main}>
                    {notFound ? (<p>this blog is gone</p>) : (
                        <div className={styles.article}>
                            <h2>{article.title}</h2>
                            <h5 className={styles.subtitle}>{article.subtitle}</h5>
                            <div className={styles.toolbar}>
                                <Button size="sm" className={styles.languageButton} onClick={() => changeLanguage()} variant="warning">{`language: ${en ? 'EN' : '中文'}`}</Button>
                            </div>
                            <div className={styles.contentContainer}>
                                {en ? (
                                    <ReactMarkdown>{article.englishContent}</ReactMarkdown>
                                ) : (<ReactMarkdown>{article.chineseContent}</ReactMarkdown>)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout >
    )
}


export async function getStaticPaths() {
    const res = await fetch(`http://localhost:1337/articles`);
    const data = await res.json();
    const paths = data.map((post) => ({
        params: { id: post.id + '' },
    }));
    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:1337/articles/${params.id}`);
    const data = await res.json();
    console.log(data);
    if (!data) {
        return {
            props: {
                notFound: true
            }
        }
    }
    return {
        props: {
            article: data
        },
        revalidate: 1
    };
}
