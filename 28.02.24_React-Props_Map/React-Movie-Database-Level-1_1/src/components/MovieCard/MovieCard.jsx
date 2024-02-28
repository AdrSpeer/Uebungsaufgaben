import "./MovieCard.css";

const MovieCard = (props) => {
  console.log(props);
  return (
    <>
      <p>{props.item.title}</p>
      <p>{props.item.year}</p>
      <p>{props.item.director}</p>
      <p>{props.item.duration}</p>
      <p>{props.item.rate}</p>
      <p className="genre">
        {props.item.genre.map((genre) => (
          <p>{genre}</p>
        ))}
      </p>
    </>
  );
};

export default MovieCard;
