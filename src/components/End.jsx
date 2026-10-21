import endData from "../mockData/endData";

export const ElementsCenter = ({elementsCenter: {textTitleData, textButtonData}}) => {
  return(
    <div className="element_center">
      <h1 className="text_end"> {textTitleData[0]}<br />{textTitleData[1]}</h1>
      <button className="buttons__end">{textButtonData}</button>
    </div>
  );
}

export const FooterColLeft = ({footerColLeft: {GPT4, alt, adress, text}}) => {
  return(
    <div className="footer-col footer-col-left">
      <img src={GPT4} alt={alt} className="image" />
      <p className="footer-address"> {adress[0]}<br />{adress[1]}</p>
      <p className="footer-copyright">{text}</p>
    </div>
  );
}

export const LiElement = ({text}) => {
  return(
    <li className="ccskrf_li"><a href="#" className="footer-link">{text}</a></li>
  );
}

export const FooterColCenter = ({TitleColCenter, LiData = []}) => {
  return(
    <div className="footer-col">
      <h4 className="footer-title_a">{TitleColCenter}</h4>
      <ul className="footer-list">
        {LiData.map((text) => (<LiElement key={text} text={text} />))}
      </ul>
    </div>
  );
}

export const ContactItem = ({text}) => {
  return(
    <li className="footer-contact-item">{text}</li>
  );
}

export const FooterColRight = ({TitleColRight, texts = []}) => {
  return(
    <>
      <div className="footer-col">
        <h4 className="footer-title">{TitleColRight}</h4>
        <ul className="footer-list">
          {texts.map((text) => (<ContactItem key={text} text={text} />))}
        </ul>
      </div>
    </>
  );
}

export const FooterGrid = ({footerGrid: {footerColLeft, footerColCenter1, footerColCenter2, footerColRight}}) => {
  return(
    <>
      <div className="footer-grid">
        <FooterColLeft footerColLeft={footerColLeft} />
        <FooterColCenter  {...footerColCenter1} />
        <FooterColCenter  {...footerColCenter2} />
        <FooterColRight  {...footerColRight} />
      </div>
    </>
  );
}

const End = () => {
  const {elementsCenter, footerGrid} = endData;

  return (
      <>
        <ElementsCenter elementsCenter={elementsCenter} />
        <FooterGrid footerGrid={footerGrid} />
      </>
    );
};

export default End;