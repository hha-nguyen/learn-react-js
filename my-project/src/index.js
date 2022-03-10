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

const startBtn = document.querySelector('.start-button');
const hideBtn = document.getElementById('hide-nav');
const showBtn = document.getElementById('show-nav');
const navBar = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav-item');
const mainContent = document.querySelector('.main-content');

startBtn.addEventListener('click', ()=>{
  mainContent.classList.add('start');
  startBtn.classList.add('hide');
});

hideBtn.addEventListener('click', ()=> {
  navBar.classList.add('hide');
  showBtn.classList.add('start');
});

showBtn.addEventListener('click', ()=> {
  navBar.classList.remove('hide');
  showBtn.classList.remove('start');
});

navItem.forEach(item => item.addEventListener('mousedown', ()=>{
  item.classList.add('click');
}))
navItem.forEach(item => item.addEventListener('mouseup', ()=>{
  item.classList.remove('click');
}));












