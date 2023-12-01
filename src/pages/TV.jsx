import React from 'react'
import { tv } from '../tvDummy'
import TVc from '../components/TVc';
export default function TV() {
  return (    
    <div className="App">
      <div className="TVs-container">
        {tv.results.map((item) => {
          return (
            <TVc
              key={item.id}
              poster_path={item.poster_path}
              name={item.name}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  )
}