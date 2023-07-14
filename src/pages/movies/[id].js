export default function MovieDetailPage(props) {
  console.log("props : ", props);
  const imgList = [
    {
      id: 1,
      message:
        "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_428.jpg",
    },
    {
      id: 2,

      message: "https://images.dog.ceo/breeds/mastiff-english/3.jpg",
    },
    {
      id: 3,
      message: "https://images.dog.ceo/breeds/groenendael/n02105056_6899.jpg",
    },
    {
      id: 4,

      message:
        "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2537.jpg",
    },
    {
      id: 5,

      message: "https://images.dog.ceo/breeds/kuvasz/n02104029_4581.jpg",
    },
    {
      id: 6,

      message: "https://images.dog.ceo/breeds/pitbull/pitbull_dog.jpg",
    },
  ];
  return (
    <div>
      {imgList.map((item, index) => {
        // <Image key={index}></Image>;
      })}
    </div>
  );
}
