
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/container';
import Navbar from './components/navBar'
import ProductCard from './components/productCard';




function App() {
  const productData = [
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/2062',
      title: 'PICADOR POT PLASTICO',
      description: '2 X 1 PICADOR POT PLASTICO 3 PARTES COLORES',
    },
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/2061',
      title: 'PICADOR PORRO PLASTICO 3 PARTES',
      description: '2 X 1 PICADOR PORRO PLASTICO 3 PARTES COLORES',
    },
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/3758',
      title: '3RAYOS PICADOR WOODY MIX',
      description: '3RAYOS PICADOR WOODY MIX',
    },
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/4365',
      title: 'BAKUBOX',
      description: 'BAKUBOX',
    },
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/2062',
      title: 'PICADOR POT PLASTICO',
      description: '2 X 1 PICADOR POT PLASTICO 3 PARTES COLORES',
    },
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/2061',
      title: 'PICADOR PORRO PLASTICO 3 PARTES',
      description: '2 X 1 PICADOR PORRO PLASTICO 3 PARTES COLORES',
    },
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/3758',
      title: '3RAYOS PICADOR WOODY MIX',
      description: '3RAYOS PICADOR WOODY MIX',
    },
    {
      imageUrl: 'https://www.santaplanta.com.ar/api/api/product/image/0/4365',
      title: 'BAKUBOX',
      description: 'BAKUBOX',
    },
  ];

  return (
    <>
    <div>
      <Navbar/>
     
    </div>
      <Container>
        <div className="bg-light mt-5 p-3 text-center">
          <h2>PRODUCTOS</h2>
        </div>
      <div className="row mt-4 p-3">
        {productData.map((product, index) => (
          <div className="col-md-3 mt-4" key={index}>
            <ProductCard
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </Container>
      
    </>
  )
}

export default App
