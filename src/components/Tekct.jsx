import tekctData from "../mockData/tekctData";

const Tekct = () => {
  const {text} = tekctData;

  return (
    <h1>
      {text[0]}<br />{text[1]}
    </h1>
  );
};

export default Tekct;