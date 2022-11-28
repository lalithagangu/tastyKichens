import './index.css'

const Counter = props => {
  const {foodId, quantity, increaseQuantity, decreaseQuantity} = props

  const onDecrement = () => {
    decreaseQuantity(foodId)
  }

  const onIncrement = () => {
    increaseQuantity(foodId)
  }
  return (
    <div className="cart-arrow-buttons-container">
      <button
        type="button"
        className="cart-button"
        onClick={onDecrement}
        id="decrement-quantity"
      >
        -
      </button>
      <p id="item-quantity" className="cart-quantity-number">
        {quantity}
      </p>
      <button
        type="button"
        className="cart-button"
        onClick={onIncrement}
        id="increment-quantity"
      >
        +
      </button>
    </div>
  )
}

export default Counter
