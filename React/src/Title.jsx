import "./App.css"
function Title(){
    return (
        <div>
            <h2></h2>
            this is the new component with name title.
            <h1>Harshal</h1>
            here the div tag in the title component is end.
        </div>
    )
  }
  
  function Sum (){
    return <div>
        <span>This is Title.jsx</span>
        <h1>Sum of two number</h1>
    </div>
  }

//  export default Title;
  export {Sum, Title};