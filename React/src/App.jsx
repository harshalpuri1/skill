
import './App.css'
import "./Title"
import './Product.jsx'

function Hello(){
  return <h1>Hello!!!</h1>;
}
function Description(){
  return <h3>I am the 
    Description <br />
  </h3>;
}

function App() {
  return ( 
    <div> <span>This is App.jsx</span>
      <h1>Welcome to my Website</h1>
      <Description/>
      <Hello/><Hello/>
      here the div ends
    </div>
  );
}


export default App
