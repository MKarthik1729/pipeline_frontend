import './App.css';
import FormData from './FormData.js'
function App() {
  return (
    <div className="App">

      <div className='set'>

      <p className='para'>The project is to predict whether a startup which is currently Operating, IPO, Acquired, or closed. <br /><br />
      The AdaBoost Classifier and Gradient Boost algorithms are used in this project <br /><br />
      {/* Our model accuracy :<br /> */}
      Train Accuracy  : 0.9845143155136669<br />
      Test Accuracy  : 0.9849660400396836
      </p>
      <FormData />
      </div>
    </div>
  );
}

export default App;
