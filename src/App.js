// import React from "react";


// // function App() {
// //   // let ele = React.createElement("div",{className:"APP"},
// //   //   React.createElement("h1",null,"Header")
// //   // )
// //   let Username="saitharun";
// //   return (
// //     // <div className="App">
// //     //   <h1 style={{color:"red"}}>mission Accomplished !!</h1>
// //     // </div>
// //     // ele

// //     <div>
// //       <h1>{Username}</h1>
// //       <p>
// //         {100+120}
// //       </p>
// //     </div>
//   );
// }

// export default App;

//  components
//CBC
// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//     <h1>Class Bsed Component</h1>
//     )
//   }
// }
// export default App;

//component composition
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Main/>
    
    <div className='sidebar'>
        <Sidebar1/>
        <Sidebar2/>
    </div>
        <Footer/>
    </div>
    
  )
}

export default App
