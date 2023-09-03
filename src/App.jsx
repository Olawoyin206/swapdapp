import React , {useState} from 'react'
import logo from './logo.png'
import './App.css'
import {FaWallet} from 'react-icons/fa'
import {FaEthereum} from 'react-icons/fa'
import {LuArrowUpDown} from 'react-icons/lu'
import {CiSettings} from 'react-icons/ci'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

function App() {
  const [laptop, setlaptop] = useState(false)
  
 const handleClick = ()=>{
  setlaptop(!laptop)
 }
  return (
    <>
<div>
        <nav className="navbar flex">
            <ul class="menu-list">
                <li><img src={logo} ></img></li>
                <li>Swap</li>
                <li>Pools</li>
                <li>Pay</li>
                <li className="hovering">Tools <i id="angle-down" className="fa fa-angle-down"></i><i id="angle-up" className="fa fa-angle-up"></i> 
                    <ul className="tool_dropdown">
                        <li>Analytics</li>
                        <li>Blog</li>
                        <li>Academy</li>
                        <li>Forum & Proposals</li>
                        <li>Participate</li>
                    </ul>
                </li>
                <li>Buy Crypto</li>
            </ul>
            <ul className="connect_buttons">
                <li className='flex items-center'><FaEthereum /> Ethereum</li>
                <li>Connect wallet</li>
            </ul>
        </nav>
  
        <div className="swap-section">
            <div className="swap-section-first">
                <span className="trade">Trade</span><br/>
                <span className="price-update"><i className="fa fa-arrow-trend-up"></i>  1 SUSHI ($0.59) = 0.0003588 ETH ($1.65k)</span>
            </div>

            <div class="swap-section-second">
                <ul>
                    <li>Swap</li>
                    <li><i className='text-2xl text-center'><CiSettings /></i></li>
                </ul>
            </div>
{/* Crossswapp Section */}
            <div className="crossswap-section">
                <div className="the-overlay">
                    <div className="crossswap-content">
                      <i className='fa fa-xmark relative bg-white px-1 text-center w-6 h-6 py-1 rounded-3xl bg-opacity-5 text-white mt-0.1'></i><br></br>
                      <div className=' container inline-block cross-chain-details'> 
                      <i className='fa fa-shuffle mb-2 mr-2'></i><span>Cross-chain Swap</span> <br></br>
                      <p className='text fs'>Swap your funds on one network and swap them into a token on a different network. <a href='#' className='text'>Learn more.</a></p> 
                      </div>
                      <div  className={laptop ? "ddd" : "toggle-container flex"}>
                        <span onClick={handleClick} className={!laptop ? "toggle1" : "toggle2" }></span>
                        
                      </div>
                    </div>
                </div>
            </div>

{/* Main Swap Section */}
            <div className="main-swap mt-4">
              
                <div className='first-swap flex'>
                  <ul className='coin-selector px-4 py-0'>
                    <li className='text-3xl font-semibold py-5'>0.0</li>
                    <li className='text text-xl font-semibold'>$0.<span className='text-sm'>00</span></li>
                  </ul>
                  <ul className='coin-selector absolute float-right right-0 px-4 py-5'>
                  <li className=' select-coin flex text-white items-center text-2xl font-semibold '><FaEthereum /> ETH <MdOutlineKeyboardArrowDown/> </li>
                    <li className=' flex items-center text-xl font-semibold pl-10 pt-4 gap-1'><FaWallet />$0.<span className='text-sm pt-1'>00</span></li>
                  </ul>
                </div>
                
                

                <div className='first-swap flex mt-3'>
                  <ul className='coin-selector px-4 py-0'>
                    <li className='text-3xl font-semibold py-5'>0.0</li>
                    <li className='text text-xl font-semibold'>$0.<span className='text-sm'>00</span></li>
                  </ul>
                  <ul className='coin-selector absolute float-right right-0 px-4 py-5'>
                  <li className=' select-coin flex text-white items-center text-2xl font-semibold '><img className='w-5' src={logo} ></img> Sushi <MdOutlineKeyboardArrowDown/> </li>
                    <li className=' flex items-center text-xl font-semibold pl-10 pt-4 gap-1'><FaWallet />$0.<span className='text-sm pt-1'>00</span></li>
                  </ul>
                </div>
                <div className='switch-button'> <i className='switch-icon '><LuArrowUpDown /> </i></div>  
                
                <div className='swap-button flex mt-3'>
                <span className=''>Swap</span>
                </div> <br></br>
            </div>

        </div>
    </div>
    </>
  )
}

export default App
