import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

import { getSortedPostsData } from "../../lib/posts";
import Head from 'next/head';
import Date from '../../components/date';

export async function getStaticProps() {
    // console.log("GETSTATICPROS");
    // console.log("--- typeof window => ", typeof window === 'undefined', " --- ", typeof global === 'undefined')

    const allPostsData = getSortedPostsData();
    return {
            props: {
                allPostsData
            }
        };
}

export default function FirstPost({ allPostsData }) {
    // console.log("allPostsData: ", allPostsData);
    return (
        <>
            <Layout>
                <Head>
                    <title>Posts</title>
                </Head>
                <h1> Posts </h1>
                <h2> <Link href="/" className={`${utilStyles.url}`}>Back to home</Link> </h2>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}className={`${utilStyles.url + " " + utilStyles.headingLg}`}>
                                {title}
                            </Link>
                            <br />
                            {id}
                            <br />
                            <Date dateString={date} />
                        </li>
                    ))}
                    </ul>
                </section>
        </Layout>
        </>
    );
}