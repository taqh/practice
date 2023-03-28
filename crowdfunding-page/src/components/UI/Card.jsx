
const Card = (props) => {
   return <section className={`card ${props.className}`}>{props.children}</section>;
};

export default Card;
