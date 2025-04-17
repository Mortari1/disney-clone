import React from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwars from './../assets/images/starwar.png'

import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalgV from './../assets/Videos/national-geographic.mp4'
import starwarsV from './../assets/Videos/star-wars.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwars,
            video:starwarsV
        },
        {
            id:5,
            image:nationalG,
            video:nationalgV
        },
    ]
  return (
    <div>
        {productionHouseList.map((item)=>(
            <div>
                <img src={item.image} className='w-full'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse