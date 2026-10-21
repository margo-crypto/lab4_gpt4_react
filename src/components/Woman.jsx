import womanData from "../mockData/womanData"

export const WomanLeftTitle = ({titleData}) => {
  return(
    <>
      <h2>{titleData[0]}<br />{titleData[1]}</h2>
    </>
  )
}

export const WomanLeftText = ({textData}) => {
  return(
    <>
      <p className="container__content_2">
        {textData}
      </p>
    </>
  )

}

export const WomanLeftHref = ({hrefData: {href, text}}) => {
  return(
    <>
      <li className="item_ccskrf">
        <a className="cta" href={href}>{text}</a>
      </li>
    </>
  )
}

export const WomanLeft = ({leftData: {titleData, textData, hrefData}}) => {
  return(
    <>
      <div className="woman_left">
        <p className="container__content_1">Запросить ранний доступ</p>
        <WomanLeftTitle titleData={titleData}/>
        <WomanLeftText textData={textData}/>
        <WomanLeftHref hrefData={hrefData}/>
      </div>
    </>
  )
}

export const WomanRight = ({rightData: {src, alt}}) => {
  return(
    <>
      <div className="woman_right">
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

const Woman = () => {
  const {rightData, leftData} = womanData;

  return (
    <>
      <WomanRight rightData={rightData} />
      <WomanLeft leftData={leftData} />
    </>
  );
};

export default Woman;