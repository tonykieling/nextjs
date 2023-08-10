import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

import { getAllPostsIds, getPostData } from "../../lib/posts";
import Date from '../../components/date';

export async function getStaticProps({ params }) {
    console.log("11111111- getStaticProps");
    // console.log("params: ", params);
    // console.log("--- typeof window => ", typeof window === 'undefined', " --- ", typeof global === 'undefined')

    const postData = getPostData(params.id);
    return {
            props: {
                postData
            }
        };
}

export async function getStaticPaths() {
    console.log("22222222- getstaticPATHS");
    const paths = getAllPostsIds();

    return {
        paths,
        fallback: false
    };
}


export default function Post({ postData }) {
    console.log("postData: ", postData)
    return (
        <>
            <Layout>
                <Head>
                    <title>
                        { postData.title }
                    </title>
                </Head>

                <h1> 
                    <Link href={"/posts"} className={`${utilStyles.url}`}> Posts </Link>
                </h1>
                <h2> <Link href="/" className={`${utilStyles.url}`}>Back to home</Link> </h2>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Post</h2>
                    <ul className={utilStyles.list}>
                    {/* {postData.map(({ id, date, title }) => ( */}
                        <li className={utilStyles.listItem} key={postData.id}>
                            <h1 className={utilStyles.headingXl}> {postData.title} </h1> <br />
                            {postData.id} <br />
                            {/* {postData.date} */}
                            <Date dateString={postData.date} />
                        </li>
                    {/* ))} */}
                    </ul>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </section>
        </Layout>
        </>
    );
}