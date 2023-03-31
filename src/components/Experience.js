import React from 'react'

const Experience = () => {
  return (
    <div>  

    <div className="bg2">
        <form className="custom-form">
            <div>
              <label for="title">Title:</label>
              <input required type="text" id="title" name="title"/>
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea className='desc' required id="description" name="description" col="10"></textarea>
            </div>
            <div>
              <label for="image">Image:</label>
              <input required type="file" id="image" name="image"/>
            </div>
            <button type="submit">Submit</button>
          </form>   
    </div> 
  </div>
  )
}

export default Experience