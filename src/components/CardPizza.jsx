const CardPizza = (props) => {
  return (
    <div>

        <img src={props.img} alt={props.name} />

        <h2>
            {props.name}
        </h2>

        <p>
            {props.ingredients}
        </p>

        <p>
            Price: ${props.price}
        </p>
        
    </div>
  )
}

export default CardPizza