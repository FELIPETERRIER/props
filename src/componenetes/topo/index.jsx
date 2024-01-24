import './style.css';
import Logo from '../../assets/logo.png';
import Moon from '../../assets/moon.png';


function Topo() {
    return (
      <div className='top'>        
        <img  className= 'logo'src={Logo} alt="logo" />
        <button>
          <img src={Moon} alt='Lua'/>
        </button>
      </div>
    );
  }
  
  export default Topo;
  