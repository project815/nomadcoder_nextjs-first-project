import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Image from "next/image";
export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h2>{movie.original_title}</h2>
        </div>
      ))}
      <h4>
        <Link
          href={{
            pathname: `/movies/${movie.id}`,
            query: {
              title: movie.original_title,
            },
          }}
          as={`/movies/${movie.id}`}
        >
          <a>{movie.original_title}</a>
        </Link>
      </h4>
      {/* {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))} */}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3001/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
//해당 함수가 활성화 되기 전까지는 사전에 생성된 html페이지에서는 데이터가 포함되어 있지 않음.
//nextjs는 페이지를 미리 html로 export한다.

//컴포넌트의 초기 상태를 미리 export하기 떄문에 누군가 홈페이지에 접속했을 때 react.js가 처리를 마치기 전까지는 실제 html소스코드를 보면 "로딩중"인 것을 볼 수 있다.
//reactjs 처리가 완료되면 useEffect, useState fetchㄹ를 통해 데이터를 가져오고, 영화 정보를 state에 넣는다.
//즉, reactjs의 처리가 완료될 때까지 대기해야 하고 유저는 api에서 데이터를 받아올 때까지는 로딩중 상태를 봐야한다는 것을 의미한다.

//하지만 html이 완전한 상태로 준비되었으면 한다면(로딩중 없이), 유저가 접속했을 떄, 모든 데이터가 페이지에 들어있고, 유저가 로딩 상태를 보지 않았으면 한다면, getStaticProps를 사용해야 한다.
//프론트에는 보이지 않고, 벡엔드에서만 작동됨. 여기에 apikey를 넣을 수도 있고, 데이터를 가져오거나, 뭐든 원하는 건 다 할 수 있다.
//props를 반환하면, nextjs는 해당 props를 컴포넌트에 전달한다.
//단 api가 느리다면 유저는 아무 것도 없는 흰화면을 보게 됨.
//모든 처리가 완료되면 한 방에 뜬다. search engine에 좋다.
//소스코드에서 데이터가 들어있는 것을 볼 수 있고, 이전에는 그런 게 없었다.
