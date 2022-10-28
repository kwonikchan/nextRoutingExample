// import Link from "next/link";

// const Index = () => (
//   <Layout>
//     <Link href="/about">
//       <p>this page url : http://localhost:3000</p>
//     </Link>
//   </Layout>
// );

// export default Index;
// //Link 로 이동하는건 ssr 이 아님, network 요청 없이 이동?

// import withLayout from "../component/MyLayout";

// const Page = () => <p>This is the about page</p>;

// export default withLayout(Page);
import Layout from "../component/MyLayout";
import Link from "next/link";

const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      {/* as 를 추가해서, 동적인 url 을 사용  */}
      {props.id}
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Hello Next.js" />
        <PostLink id="Learn Next.js is awesome" />
        <PostLink id="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
