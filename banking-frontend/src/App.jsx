import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { LayoutDashboard } from './components/LayoutDashboard';
import { Button } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';

function App() {

  const [accounts,setaccounts] = useState([])
  const [loggedinuser, ]  = useState("62c053178d9e133eb3c586b3")

  useEffect( () => {
    axios.get('http://localhost:3030/api/v1/accounts')
    .then( response => {
      setaccounts(response.data.data)
    })
  },[])

  const handlevoting = async (candidateId) => {
    const request = {
      votedUser: loggedinuser,
      candidate: candidateId
    }

    await axios.post('http://localhost:3030/api/v1/voting', request)
    .then(response => {
      alert("Thanks for voting")
      location.reload()
    })
  }

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
               {
                accounts.map( account => {
                  return <div key={account._id} className=' rounded-3 vote-bg' style={{ width: '24vw', background: '', height: '500px', background : `url('${account.profileUrl}')`}}>
                    <div className='votes-content'>{account.votes}</div>

                    <div className='card-details'>
                      <h4 className='text-capitalize'>{account.candidateName}</h4>
                      <h5>{account.postDescription}</h5>

                      <div className=' d-flex flex-row mt-4 gap-4 justify-content-center'>
                        <Button onClick={()=> handlevoting(account._id)}>Vote</Button>
                        <Button>Details</Button>
                      </div>
                    </div>
                </div>
                })
               }
            </div>

            <h4 className=' text-start mt-5 h6'>School Stuff</h4>

            <div className=' d-flex flex-row mt-4 justify-content-between'>
                <div className=' rounded-3 vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
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
                <div className=' rounded-3 vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
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
                <div className=' rounded-3 vote-bg' style={{ width: '24vw', background: '', height: '500px'}}>
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
