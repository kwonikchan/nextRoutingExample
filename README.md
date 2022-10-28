# nextRoutingExample
<br>
NextJS 에서 기본적인 세팅과 라우팅에 대해서 설명드립니다. <br>
code 예시<br>
<a>https://github.com/kwonikchan/nextRoutingExample</a><br>

<br>
단계 1 . <br>
CNA 명령어 <br>
```npx create-next app $이름```<br>

----node 버전이 낮을 경우 next 사용 불가 ----<br>

단계 2<br>
개발환경 명령어<br>
```yarn dev```<br>
```npm run dev```<br>
<br>
<h4>next의 주요 특징 ‘FS routing` (파일시스템 라우팅) </h4><br>
<br>
Index routes <br>
<br>
router will automatically route files name index to the root of the directory <br>
<br>
pages 폴더에 양식에 맞게 파일을 생성하면, 자동적으로 route 가 됨<br>
<br>
예시<br>
```pages/index.js   ===> '/'```<br>
```pages/blog/index.js   ===> '/blog' ``` (nested routes)<br>
<br>
ndex.js 는 경로가 ‘/’<br>
<br>
pages/blog/index.js ⇒ /blog가 됨. <br>
<br>
예를들어, notice/board 라는 route 가 필요한 경우<br>
<br>
pages/notice/board 폴더를 생성하고, index.js 파일을 생성하면 됨 <br>
<br>
****[Nested routes](https://nextjs.org/docs/routing/introduction#nested-routes) 를 지원**

<br><br>
<h2> Dynamic route segments : 동적 라우팅 </h2>
<br>
- `pages/blog/[slug].js` → `/blog/:slug` (`/blog/hello-world`)<br>
- `pages/[username]/settings.js` → `/:username/settings` (`/foo/settings`)<br>
- `pages/post/[...all].js` → `/post/*` (`/post/2020/id/title`)<br>
<br>
와 같은 형식, 동적 라우팅에 대한 공식문서 : https://nextjs.org/docs/routing/dynamic-routes<br>

<br><br><br>

작성한 예시에서의 파일 구조 
<br>
component<br>
│  │   header.js<br>
│  │   Mylayout.js<br>
│ <br>
─pages
│  │  about.js <br/>
│  │  index.js<br>
│  │  post.js<br>
│  │ <br>
│  └─ p<br>
│          index.js<br>
│          [id].js<br>



Next.js 의 기능 중 동적라우팅을 사용해서. 'pages`의 동적인 경로 처리가능<br>
`pages/p/[id].js` 페이지를 생성해서, 동적인 경로를 만들고, /p 폴더안에서 [id].js 를 파일을 만들고, <br>
(router =useRouter 를 사용함. (useRouter는 import {useRouter} from 'next/router';<br>
에서 import필요 ) <br>
*p 폴더는 pages 폴더아래에 반드시 위치해야함. (FS 시스템이라 pages 폴더안에서만 가능한듯함(!?)<br>

```import { useRouter } from 'next/router';<br>
import Layout from '../../component/MyLayout';<br>

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
```
* 이 페이지는 , /p/다음에 오는 경로를 처리함. 예를 들면, /p/hello-sdjf는 처리하지만, /p/hello/sdjflsdjfl 의 경로는 처리 x <br>
(페이지의 파일 이름에 대괄호('[]')가 있으면 동적인 경로가 됩니다. 현재는 페이지의 전체 이름만 동적으로 만들 수 있습니다. 페이지 이름 중 일부만 동적으로 변경X<br>
. 예를 들면 '/pages/p/[id].js'는 지원하지만 '/pages/p/post-[id].js'는 지원X ) (일부만 동적인 경로만 변경은 다른 방법을 더 찾아봐야 할 것 같습니다.) <br>


```
import Layout from '../component/MyLayout'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  )
}
```
여기서 PostLink 컴포넌트를 살펴보겠습니다. 
```
const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)
```
첫 번째 링크를 클릭해서, 이동 후 뒤로가기/앞으로가기 등이 정상 작동하고, 히스토리가 관리되는 것을 확인 할 수 있습니다. <br>
더 찾아봐야 할 부분이 있다면, 공식문서를 읽어 볼 것을 추천드립니다. .<br>
https://nextjs.org/docs#dynamic-routing  <br>



