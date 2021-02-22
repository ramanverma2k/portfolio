import Navbar from "../components/nav";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/Blog.module.css";

function Blog({ allPostsData }) {
    return (
        <div>
            <Navbar />
            <section className={styles.blog__container}>
                <h1 className={styles.heading}>Blog</h1>
                <ul className={styles.posts}>
                    {allPostsData.map(({ id, title, description }) => (
                        <li className={styles.posts__list} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a className={styles.posts__items}>
                                    {title}
                                    <p className={styles.post__description}>
                                        {description}
                                    </p>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: { allPostsData },
    };
}

export default Blog;
