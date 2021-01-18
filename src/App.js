import './sass/app.sass';
import firstImg from './assets/img/1.png';
import firstImg2 from './assets/img/11.jpg';
import secondImg from './assets/img/2.jpg';
import secondImg2 from './assets/img/22.png';
import thirdImg from './assets/img/3.jpg';
import thirdImg2 from './assets/img/33.png';

import ShampoItem from './components/ShampoItem';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="shampo-items">
          <ShampoItem images={[firstImg, firstImg2]} />
          <ShampoItem images={[secondImg, secondImg2]} />
          <ShampoItem images={[thirdImg, thirdImg2]} />
        </div>
      </div>
    </div>
  );
}

export default App;
