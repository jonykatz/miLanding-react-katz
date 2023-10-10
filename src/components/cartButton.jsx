import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome si aún no lo has hecho
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CartButton = () => {
  return (
    <button className="btn btn-success ml-auto" onClick={()=>{console.log('cart button')}} >
        <FontAwesomeIcon icon={faCartShopping} />
    </button>
    
  )
}

export default CartButton;