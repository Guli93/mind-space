import React from 'react';
import { FaSearch } from 'react-icons/fa';


const SearchBox = (props) => {
  return (
<>
<div data-aos={props['data-aos']} data-aos-delay ="100"className='search'>
<div  className="search-container">
  <form action="#">
    <div className="search-box">
      <input type="text" placeholder="Search..."/>
      <button type="submit"><FaSearch/></button>
      

    </div>
  </form>
</div>

  <div className='searchBoxes a'>Anxiety</div>
   <div className='searchBoxes b'>Depression</div>
   <div className='searchBoxes c'>PTSD</div>
   <div className='searchBoxes d'>Addiction</div>
   <button className='searchBox-btn' type="submit"><a href='/'></a>Show more</button>
</div>
</>
  )
}

export default SearchBox