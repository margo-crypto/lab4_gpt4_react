import blokiData from "../mockData/blokiData"

export const Blok = ({namber, src_bloka, alt_bloka, deta, card_title, card_link}) => {
  return(
    <>
      <div className={`blok_${namber} blok`}>
        <div className="foto">
            <img src={src_bloka} alt={alt_bloka} className="image_b" />
        </div> 
        <div className="card_content">
            <span className="card__date">{deta}</span>
            <h3 className="card_title">
                {card_title}
            </h3>
            <li className="card_link_ccskrf">
                <a href="#" className="card_link">{card_link}</a>
            </li>
        </div>       
      </div>
    </>
  )
}

export const CreateBloki = ({items}) => {
   return items.map((item) => (
    <Blok key={item.namber} {...item} />
  ));
}

const Bloki = () => {
  const {leftData, centerData, rightData} = blokiData;

  return (
    <>
      <div className="left_blok ">
        <CreateBloki items={leftData}/>
      </div>
      <div className="center_bloki">
        <CreateBloki items={centerData}/>
      </div>
      <div className="right_bloki">
        <CreateBloki items={rightData}/>
      </div>
    </>
  );
};

export default Bloki;