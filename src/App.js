import './App.css';
import PropsClass2 from './conponents/PropsClass2';
import PropsFunction3 from './conponents/PropsFunction3';
import ClassComponent from './conponents/ClassComponent';
import ClassState from './conponents/ClassState';
import FirstComponent from './conponents/FirstComponent';
import Probs from './conponents/Probs';
import ProbsChild from './conponents/ProbsChild';
import ProbsInClass from './conponents/ProbsInClass';
import PropsFunction2 from './conponents/PropsFunction2';
import UseState from './conponents/UseState';
import Render from './conponents/Render';
import Render2 from './conponents/Render2';
import Render3 from './conponents/Render3';
import Bootstrap from './conponents/Bootstrap';
import FunProps2 from './conponents/FunProps2';
import FunProps from './conponents/FunProps';
import MapMethod from './conponents/MapMethod';
import Forms from './conponents/Forms'
import Axios from './conponents/Axios';
import {Routes, Route} from 'react-router-dom'
import Navbar from './conponents/Navbar';
import Abt from './conponents/Abt';
import AxiosPost from './conponents/AxiosPost';
import AxiosFuncPost from './conponents/AxiosFuncPost';
import AxiosFunc from './conponents/AxiosFunc';
// import Routes from './conponents/Routes';

function App() {
  return (
    <div className="App App-header">
      < Bootstrap />

      {/* day 1 */}
      <p>day:1</p>
      <FirstComponent />

      {/* day 2 */}
      <p>day:2</p>
      <ClassComponent />
      <Probs name = "jeyakumar" age = "24" />
      <ProbsChild > probs child </ProbsChild>
      <ProbsInClass name="Ephraim" age= "23" />

      {/* day 3 */}
      <p>day:3</p>
      <PropsFunction2 name= "James" age = "25" />
      <PropsClass2 name = "Gold Berg" age = "20" />
      <PropsFunction3 name = "Simon Riley" age = "28" />
      <ClassState />

      {/* day 4 */}
      <p>day:4</p>
      <UseState />

      {/* day 5 */}
      <p>day:5</p>
      {/* If/else Statement  */}
      <Render age = {10} />

      {/* Element Variables */}
      <Render2 age = {10} />

      {/* Ternary Operaater and Short Circuit */}
      <Render3 age = {27} />

      {/* day 6 */}
      <p>day:6</p>
      <FunProps2 />
      <FunProps />

      {/* day 7 */}
      <p>day:7</p>
      <MapMethod />

      {/* day 8 */}
      <p>day:8</p>
      <Forms />

      {/* day 9 */}
      <p>day:9</p>
      {/* <Axios /> */}

      {/* day 10 */}
      <p>day:10</p>

      <Navbar />

      <Routes>

        <Route path='/hlo' element={<FirstComponent/>} ></Route>
        <Route path='/greet' element={<Abt/>} ></Route>
        {/* <Route path='/hlo' element={<FirstComponent/>} ></Route> */}

      </Routes>

      <AxiosPost />

      {/* day 11 */}
      <p>day:11</p>
    
      <AxiosFunc />
      <br/>
      <AxiosFuncPost />

    
    
      


      
    </div>
  );
}

export default App;
