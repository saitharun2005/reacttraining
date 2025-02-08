// // // // import React from "react";


// // // // // function App() {
// // // // //   // let ele = React.createElement("div",{className:"APP"},
// // // // //   //   React.createElement("h1",null,"Header")
// // // // //   // )
// // // // //   let Username="saitharun";
// // // // //   return (
// // // // //     // <div className="App">
// // // // //     //   <h1 style={{color:"red"}}>mission Accomplished !!</h1>
// // // // //     // </div>
// // // // //     // ele

// // // // //     <div>
// // // // //       <h1>{Username}</h1>
// // // // //       <p>
// // // // //         {100+120}
// // // // //       </p>
// // // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // //  components
// // // //CBC
// // // // import React from "react";
// // // // class App extends React.Component{
// // // //   render(){
// // // //     return(
// // // //     <h1>Class Bsed Component</h1>
// // // //     )
// // // //   }
// // // // }
// // // // export default App;

// // // //component composition
// // // import React from 'react'
// // // import Navbar from './components/Navbar'
// // // import Main from './components/Main'
// // // import Sidebar1 from './components/Sidebar1'
// // // import Sidebar2 from './components/Sidebar2'
// // // import Footer from './components/Footer'


// // // const App = () => {
// // //   return (
// // //     <div className='app'>
// // //         <Navbar/>
// // //         <Main/>
    
// // //     <div className='sidebar'>
// // //         <Sidebar1/>
// // //         <Sidebar2/>
// // //     </div>
// // //         <Footer/>
// // //     </div>
    
// // //   )
// // // }

// // // export default App
// // import React, {Component} from "react";
// // import CBCPropEx from "./propsex.jsx/CBCPropEx";
// // import FBCPropEx from  "./propsex.jsx/FBCPropEx";



// // export default class App extends Component {
// //   render() {
// //     console.log(this);
// //         return (
// //       <div>
// //         {/* <CBCPropEx
// //         username="tharun"
// //         age={20}
// //         hobbies={["playing","Gaming","Reading books"]}
// //         address={{city :"Hyderabad", area: "dulapally"}}
// //         sendFun={function(){alert("hi i am tharun")}}
// //         /> */}

// //         <FBCPropEx
// //         username="tharun"
// //         isMarried={true}
// //         hobbies={["playing","Gaming","Reading books"]}
// //         />

// //       </div>
// //     )
// //   }
// // // }
// // import React from 'react'
// // import PropChildEx from './propsex/PropChildEx'
// // import SubChildEx from './propsex/SubChildEx'
// // export const App = () => {
// //   return (
// //     <div>
// //       <PropChildEx num={1000}>
// //         <h1>This is data coming from props children</h1>
// //       <SubChildEx/>
// //       </PropChildEx>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import FBCStateEx from './stateexample/FBCStateEx'
// // import CBCStateEx from './stateexample/CBCStateEx'


// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx/> */}
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// // import CBCStateex from './stateEx/CBCStateex'
// // // import FBCStateex from './stateEx/FBCStateex'
// // import FunctionalComponent from './components/FunctionalComponent'
// // // import "./components/dd/Styles.css"
// // import "./Styles.css"
// import FunctionalComponent from './components/FunctionalComponents'
// import "./components/Styles.css"
// import styles from './components/myStyle.module.css'
// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateex/>
//        */}
//        {/* <FBCStateex/> */}
//        <h1 class="heading">This is on styling class</h1>
//        <h1 class={styles.error}>Error</h1>
//        <FunctionalComponent clgName="MRU" apply={true}/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import MyForm from './stateexample/MyForm'
// import CBCAssign from './stateexample/CBCAssign'
// import './components/Styles.css'

const App = () => {
  return (
    <div>
      <MyForm/>
    </div>
  )
}

export default App