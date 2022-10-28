import { useRouter } from "next/router";
import Layout from "../../component/MyLayout";

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>
        {router.query.id}
        {router.query.id}
      </h1>
      <p>index.js</p>
    </Layout>
  );
}
