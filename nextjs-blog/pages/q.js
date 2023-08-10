import Layout from "../components/layout";

export default function Asd() {
    return (
        <Layout>
            <h1> QQQ page!</h1>
            <p>It means routing can be done by either:</p>
            <ol>
                <li>having a directory and a index file within that, or</li>
                <p> &nbsp;&nbsp;pages/home/index.js =&gt; www.site.ca/home</p>
                <li>having a js file and the rout will be the location ogf that + its filename</li>
                <p>&nbsp;&nbsp;pages/new-route.js =&gt; www.site.ca/new-route</p>
            </ol>
        </Layout>
    );
}