import './App.css';
import Product from './Product.jsx';

function ProductTab(){
    let opotions=["Hi-tech" , "Durable", "Fast"];
    let opotions2={a:"Hitech" ,b: "Durable", c:"Fast"};

    return(
        <>
        <span>This is ProductTab</span>

        <div className='ProductTab'>
            <Product title="Phone" price={25000} features={opotions} features2={opotions2}/>
            <Product title="Laptop" price={50000} />
            <Product title="pen" price={25}/>
        </div>
        </>
    )
}

export default ProductTab;