import Head from "next/head";
import { getPostsData, getAllPostsIds } from "../../lib/posts";

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
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1>{postData.title}</h1>
            <br />
            {postData.date}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    );
}

export default Post;
