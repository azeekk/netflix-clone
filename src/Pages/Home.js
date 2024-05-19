import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import {actions,originals} from '../urls'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Action' isSmall />
    </div>
  )
}

export default Home