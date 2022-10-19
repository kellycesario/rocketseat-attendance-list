import "./styles.scss";

export type CardProps = {
  name: string;
  time: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}

export default Card;
