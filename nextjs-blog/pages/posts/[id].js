import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

import { getAllPostsIds, getPostData } from "../../lib/posts";

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


export default function Post({ postData: {id, title, date}}) {
    console.log("-------: ", id)
    return (
        <>
            <Layout>
                <h1> Posts </h1>
                <h2> <Link href="/">Back to home</Link> </h2>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Post</h2>
                    <ul className={utilStyles.list}>
                    {/* {postData.map(({ id, date, title }) => ( */}
                        <li className={utilStyles.listItem} key={id}>
                            {title} <br />
                            {id} <br />
                            {date}
                        </li>
                    {/* ))} */}
                    </ul>
                </section>
        </Layout>
        </>
    );
}