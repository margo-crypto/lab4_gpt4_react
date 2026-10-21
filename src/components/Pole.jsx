import poleData from "../mockData/poleData"

export const PoleText = ({textData: {title, text}}) => {
  return(
    <>
      <div className="text_2">
        <p className="t1">{title}</p>
        <p className="t2">{text[0]}<br />{text[1]}</p>
      </div>
    </>
  )
}

export const PoleBatton = ({battonData}) => {
  return(
    <>
      <button className="nachat_button btn">{battonData}</button>
    </>
  )
}

const Pole = () => {
  const {textData, battonData} = poleData;

  return (
    <>
      <PoleText textData={textData}/>
      <PoleBatton battonData={battonData}/>
    </>
  );
};

export default Pole;
