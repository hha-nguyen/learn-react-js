import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <ul>
//         <li>Thing 1</li>
//         <li>Thing 2</li>
//     </ul>,
//     document.getElementById('root')
// );

// 

// function MainContent() {
//     return (
//         <h1>I'm learning React</h1>
//     );
// }

// ReactDOM.render(
//     MainContent(),
//     document.getElementById('root')
// );

// const nav = (
//   <div>
//       <nav>
//           <h1>website</h1>
//           <ul>
//               <li>Pricing</li>
//               <li>About</li>
//               <li>Contact</li>
//           </ul>
//       </nav>
//       <h2>Test</h2>
//   </div>
  
// );

// const root = document.getElementById('root');
// root.append(nav);
// ReactDOM.render(
//     nav, 
//     document.getElementById('root')
// );

//COMPONENTS

ReactDOM.render(<App />, document.getElementById('root'));

console.log(document.querySelector('.main-content'));
document.querySelector('.start-button').addEventListener('click', ()=>{
  document.querySelector('.main-content').classList.add('start');
  document.querySelector('.start-button').classList.add('hide');
});




