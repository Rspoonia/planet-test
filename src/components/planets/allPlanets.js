import React from 'react'
import Cards from './cards'

export default function AllPlanets({ planetsData, favplanetHandler }) {
  return (
    <div className="itme-list">
      <span>All Planets</span>
      {planetsData.map((planet) => (
        <Cards
          planet={planet}
          favplanetHandler={favplanetHandler}
          key={planet.id}
        />
      ))}
    </div>
  )
}
