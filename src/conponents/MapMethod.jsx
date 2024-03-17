import React from 'react'
import MapRender from './MapRender'

const MapMethod = () => {
    let heros = [
        {
            id: 1,
            name: "Tony Stark",
            heroname: "IronMan"
        },{
            id:2,
            name:"Steve Rogers",
            heroname:"Captain America"
        },{
            id:3,
            name:"Peter Parker",
            heroname:"SpiderMan"
        }
    ]

    let herolist = heros.map(hero => {
        return(
            <div>
                <MapRender
                handleHero={hero.name}
                handleHeroName={hero.heroname}
                />
                {/* <p>{hero.name}</p>
                <p>{hero.heroname}</p> */}
            </div>
        )
    })
  return (
    <div>
        {herolist}
    </div>
  )
}

export default MapMethod