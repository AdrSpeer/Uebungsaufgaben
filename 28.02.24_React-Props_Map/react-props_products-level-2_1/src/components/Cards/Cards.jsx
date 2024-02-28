import "./Cards.css";

const Cards = (props) => {
  console.log(props);
  return (
    <>
      <img src={props.item.imgURL} alt="#" />
      <p>{props.item.description}</p>
      <p>{props.item.price}</p>
      <button>BUY NOW</button>
    </>
  );
};

export default Cards;
