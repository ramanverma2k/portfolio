import Navbar from "../components/nav";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

function Blog({ allPostsData }) {
    return (
        <div>
            <Navbar />
            <section className="blog__container">
                <h1>Blog</h1>
                <ul className="posts">
                    {allPostsData.map(({ id, date, title }) => (
                        <li className="posts__items" key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
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
