import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import Title from './Title.jsx'
import {Sum,Title} from './Title.jsx'
// import Product from './Product.jsx'w
// import ProductTab from './ProductTab.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sum />
    {/* <ProductTab/> */}
    <Title/>
  </React.StrictMode>,
)
