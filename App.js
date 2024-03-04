import React from 'react';
import ReactDOM from 'react-dom';


const title1 =  (
    <h1 className='head'>
       This is title1
    </h1>
)

const Title = ()=> (
    <h1 className='head'>
       This is title
    </h1>
)

//React Functional Component
const HeadingComponent = ()=>(
    <div className="container">
        <Title/>
        <h1 id='container'>This is a functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);