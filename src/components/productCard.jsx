
// eslint-disable-next-line react/prop-types
const ProductCard = ({ imageUrl, title, description }) => {
    return (
        <div className="card" style={{ width: '18rem', minHeight: '500px' }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body flex-grow-1">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-success">
            Agregar al Carrito
          </a>
        </div>
      </div>
    );
  };
  
  export default ProductCard;