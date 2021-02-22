import Head from "next/head";
import { getPostsData, getAllPostsIds } from "../../lib/posts";
import styles from "../../styles/Blog.module.css";

export async function getStaticPaths() {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostsData(params.id);
    return {
        props: {
            postData,
        },
    };
}

function Post({ postData }) {
    return (
        <div className={styles.post__container}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1 className={styles.post__heading}>{postData.title}</h1>
            <text className={styles.post__date}>{postData.date}</text>
            <div
                className={styles.post__content}
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </div>
    );
}

export default Post;
