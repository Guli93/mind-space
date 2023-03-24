import React from 'react';
import { FaSearch } from 'react-icons/fa';


const SearchBox = () => {
  return (
<>
<div className='search'>
<div class="search-container">
  <form action="#">
    <div class="search-box">
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