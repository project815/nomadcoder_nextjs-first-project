import Image from "next/image";
import Link from "next/link";

export default function Movies() {
  return (
    <div>
      <div>movies index</div>
      이미지
      <div>
        <Link href={"/movies/1"}>Go to : 1</Link>
        <br />
        <Link href={"/movies/2"}>Go to : 2</Link>
        <br />
        <Link href={"/movies/3"}>Go to : 3</Link>
        <br />
        <Link href={"/movies/4"}>Go to : 4</Link>
        <br />
        <Link href={"/movies/5"}>Go to : 5</Link>
        <br />
        <Link href={"/movies/6"}>Go to : 6</Link>
        <br />
      </div>
    </div>
  );
}
export async function getServerSideProps({ params }) {
  // params.id를 사용하여 동적 경로의 값을 가져옵니다.
  const { id } = params;

  // id를 기반으로 데이터를 가져온 후 post라는 이름의 prop으로 전달합니다.
  const post = await fetchPostById(id);

  return {
    props: {
      post,
    },
  };
}
