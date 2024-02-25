import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  // 객체로 초기화 변경
  const [heros, setHeros] = useState(null);
  const { id } = useParams();
  const getHeros = async (id) => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setHeros(json.data); // API 응답 구조에 맞게 상태 업데이트
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getHeros(id);
  }, [id]);
  console.log(heros);

  return (
    <div>
      <h1>Detail</h1>
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          heros &&
          heros.results.length > 0 && ( // 조건부 렌더링 추가
            <div>
              <img
                src={`${heros.results[0].thumbnail.path}.${heros.results[0].thumbnail.extension}`}
                alt="Thumbnail"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Detail;
