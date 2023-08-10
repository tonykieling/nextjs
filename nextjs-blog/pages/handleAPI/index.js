// import handler from "../api/hello";

import Layout from "../../components/layout";

export default function HandlingLocalApi({ props }) {
    const getData = async () => {
        console.log("going to get data");
    };
    // console.log("getData: ", getData);

    return (
        <Layout>
            <button onClick={getData}>handling an API</button>
        </Layout>
    )
}

export async function getServerSideProps() {
    console.log("going to get data - getserversideprops");
    const data = await fetch("http://localhost:3000/api/hello");
    console.log("data--- ", await data.json())
    return {
        props: {}
    };
}