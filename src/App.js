import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <div className="navbar bg-blue-600">
         <div className="container flex mx-auto items-center">
            <div className="w-3/12">
              <div className="Logo text-white text-2x1 text-center uppercase font-semibold">Radja</div>
            </div>
         </div>
            <div className="w-6/12">
              <div className=" nav text-center">
                <ul className="nav-item text-white text-lg text-opacity-60 flex justify-center space-x-10 py-10 font-semibold">
                 <li>
                 <a className="text-white text-lg text-opacity-60 font-semibold">Profile</a>
                 </li>
                 <li>
                 <a className="text-white text-lg text-opacity-60 font-semibold">Skills</a>
                 </li>
                 <li>
                 <a className="text-white text-lg text-opacity-60 font-semibold">Projects</a>
                 </li>
                 <li>
                 <a className="text-white text-lg text-opacity-60 font-semibold">Contact</a>
                 </li>
              </ul>
              </div>
            </div>
            <div className="w-3/12">
            <div className="button text-center">
              <a className="font-semibold text-yellow-300 border border-yellow-300 rounded-full px-6 py-2">Kontak</a>
            </div>
           </div>

           <div className="text-center-uppercase"></div>
           </div>
    );
}

export default App;
