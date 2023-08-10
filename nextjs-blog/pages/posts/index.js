import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

import { getSortedPostsData } from "../../lib/posts";

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
                <h1> Posts </h1>
                <h2> <Link href="/">Back to home</Link> </h2>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                    </ul>
                </section>
        </Layout>
        </>
    );
}