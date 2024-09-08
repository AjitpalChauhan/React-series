import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   children: 'Click me to visit google'
// }
//Cannot read the syntex hence will not execute this code as it is and will not return the object



// const anotherElement = <a href="https://google.com" target='_blank'>Click me to visit google</a>
// //this will work as this syntex is understood by react



//SPECIAL REACT SYNTEX that react understand is this one
// const reactElement1 = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'Click me to visit google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(

  //reactElement
  //anotherElement
  //reactElement1


  <App/>

)
