import Modal from "../UI/Modal";
import "./Cart.css";

function CartItem({ id, name, image, quantity,onIncQuantity,onDecQuantity }) {
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Quantity: {quantity}</div>
          <div>
            <button className="yellow-button qty-button qty-plus-button" onClick={() => onIncQuantity(id)}>
              +
            </button>
          </div>
          <div>
            <button className="yellow-button qty-button" onClick={() => onDecQuantity(id)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart({ showcart, closeCart, cardItems , onIncQuantity , onDecQuantity}) {
  return (
    <Modal show={showcart} onclose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cardItems.length>0 ? cardItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            quantity={item.quantity}
            onIncQuantity={onIncQuantity}
            onDecQuantity={onDecQuantity}
          />
        )) : (<div className="empty-cart">Cart is Empty</div>)}
        <div className="cart-buttons">
          <button className="black-button close-cart" onClick={closeCart}>
            Close
          </button>
          {cardItems.length>0 && (
            <button className="yellow-button" onClick={closeCart}>
            Checkout
          </button>)
          }
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
