import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  console.log("router : ", router);

  const [id, title] = params || "";
  //홈페이지에서 바로 들어가면 데이터가 전달되면서 오류없이 진행된다.
  //하지만 바로 이 url로 접속하면 이전에 데이터를 전달받은 내용에 대해서는 없어지기 때문에 오류가 발생한다.
  //해당 페이지가 백엔드에서 pre-rendering되기 때문이다. server에서는 router.query.params가 없다.

  //router.query.params || ""; 를 쓰면 오류는 사라진다. 하지만 검색엔진에서는 데이터가 없다.(페이지소스코드 확인 결과 날라온 데이터는 존재하지 않음)/

  //이를 해결하기 위해서 serverSideProps가 필요하다.

  //결론적으로 router의 사용은 clientSide에서 이루어진다.
  //url에 있는 영화제목을 사용하여 구글 검색 최적화나 유저 접속 전 탭 이름 변경, 페이지 자체의 pre-rendering을 원한다
  //getServerSideProps를 이용하여 server-side의 데이터를 가져오면 된다.

  return (
    <div>
      <Seo title={id} />
      <h4>{id + " : " + title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  console.log("params : ", params);
  return { props: { params } };
}
