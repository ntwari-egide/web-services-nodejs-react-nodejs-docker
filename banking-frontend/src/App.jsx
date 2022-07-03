import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { LayoutDashboard } from './components/LayoutDashboard';
import { Button } from 'antd';

function App() {

  return (
    <div className="App d">
      <LayoutDashboard>
        <div className=' m-3'>

            <div className=' d-flex flex-row'>
              <div className='dark_white_bg ' style={{ width: '50%', height: '10vw'}}> </div>
              <h2 className=' mt-4 font-weight-bold' style={{ marginLeft: '-7vw', zIndex: 1, fontWeight: 'bold'}}>You vote is secure, <br></br> Your vote counts</h2>
            </div>

            <h4 className=' text-start mt-5 h6'>President of United States</h4>

            <div className=' d-flex flex-row mt-4 justify-content-between'>
                <div className=' rounded-3 dark_white_bg vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>35</div>

                  <div className='card-details'>
                    <h4>Johnson Bull</h4>
                    <h5>Ambassador in Nigeria</h5>

                    <div className=' d-flex flex-row mt-4 gap-4 justify-content-center'>
                      <Button>Vote</Button>
                      <Button>Details</Button>
                    </div>
                  </div>
                </div>
                <div className=' rounded-3 dark_white_bg vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>34</div>

                  <div className='card-details'>
                    <h4>Richard Rick</h4>
                    <h5>Ambassador in Quatar</h5>

                    <div className=' d-flex flex-row mt-4 gap-4 justify-content-center'>
                      <Button>Vote</Button>
                      <Button>Details</Button>
                    </div>
                  </div>
                </div>
                <div className=' rounded-3 dark_white_bg vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>33</div>

                  <div className='card-details'>
                    <h4>Black Obama</h4>
                    <h5>Former President of USA</h5>

                    <div className=' d-flex flex-row mt-4 gap-4 justify-content-center'>
                      <Button>Vote</Button>
                      <Button>Details</Button>
                    </div>
                  </div>
                </div>
            </div>

            <h4 className=' text-start mt-5 h6'>School Stuff</h4>

            <div className=' d-flex flex-row mt-4 justify-content-between'>
                <div className=' rounded-3 dark_white_bg vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>35</div>

                  <div className='card-details'>
                    <h4>Johnson Bull</h4>
                    <h5>Ambassador in Nigeria</h5>

                    <div className=' d-flex flex-row mt-4 gap-4 justify-content-center'>
                      <Button>Vote</Button>
                      <Button>Details</Button>
                    </div>
                  </div>
                </div>
                <div className=' rounded-3 dark_white_bg vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>34</div>

                  <div className='card-details'>
                    <h4>Richard Rick</h4>
                    <h5>Ambassador in Quatar</h5>

                    <div className=' d-flex flex-row mt-4 gap-4 justify-content-center'>
                      <Button>Vote</Button>
                      <Button>Details</Button>
                    </div>
                  </div>
                </div>
                <div className=' rounded-3 dark_white_bg vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>33</div>

                  <div className='card-details'>
                    <h4>Black Obama</h4>
                    <h5>Former President of USA</h5>

                    <div className=' d-flex flex-row mt-4 gap-4 justify-content-center'>
                      <Button>Vote</Button>
                      <Button>Details</Button>
                    </div>
                  </div>
                </div>
            </div>


        </div>
      </LayoutDashboard>
    </div>
  )
}

export default App
