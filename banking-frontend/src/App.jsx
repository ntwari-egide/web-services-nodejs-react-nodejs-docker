import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { LayoutDashboard } from './components/LayoutDashboard';

function App() {

  return (
    <div className="App d">
      <LayoutDashboard>
        <div className=' m-3'>

            <div className=' d-flex flex-row'>
              <div className='dark_white_bg ' style={{ width: '50%', height: '10vw'}}> </div>
              <h2 className=' mt-4 font-weight-bold' style={{ marginLeft: '-7vw', zIndex: 1, fontWeight: 'bold'}}>You vote is secure <br></br> Your vote counts</h2>
            </div>

            <h4 className=' text-start mt-4 h6'>President of United States</h4>

            <div className=' d-flex flex-row mt-4 justify-content-between'>
                <div className=' rounded-3 dark_white_bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>35</div>
                </div>
                <div className=' rounded-3 dark_white_bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>35</div>

                </div>
                <div className=' rounded-3 dark_white_bg' style={{ width: '24vw', background: '', height: '500px'}}>
                  <div className='votes-content'>35</div>

                </div>
            </div>

        </div>
      </LayoutDashboard>
    </div>
  )
}

export default App
