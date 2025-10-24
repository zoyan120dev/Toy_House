import React from 'react'
import HomeSlider from '../../Components/HomeSlider'
import Popular from '../../Components/Popular'
import { useLoaderData } from 'react-router'
import CustomreReview from '../../Components/CustomrReview'
import Tranding from '../../Components/Tranding'

function Homelayout() {
  const data = useLoaderData()
  return (
    <>
       <HomeSlider/>
       <Popular data={data}/>
       <CustomreReview/>
       <Tranding data={data}/>
    </>
  )
}

export default Homelayout