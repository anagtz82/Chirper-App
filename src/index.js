import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';


// const App = () => {
//     return <h1 > Howdy, React! </h1>;
// }

// const App = (props) => {
//     return <h1>Welcome, {props.name}</h1>;
// }

// const App = () => {
//     return (
//         <div>
//             <Welcome name="React" />
//         </div>



// class App extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }
    

ReactDOM.render(<App text= "randomness" /> , document.getElementById('root'))



