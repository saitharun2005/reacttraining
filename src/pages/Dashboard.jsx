import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <form action="">
          <input type="text" placeholder='username' /><br />
          <input type="email" placeholder='email' /><br />
          <input type="password" placeholder='password' /><br />
          <label>
            Gender
          </label>
          <radio>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </radio><br />
          <textarea name="" id="add"></textarea><br />
          <input type="file" />
          <label>Choose file</label><br />
          <select>
            <option>
              INDIA
            </option>
            <option>
              USA
            </option>
            <option>
              Australia
            </option>
          </select>
          
      </form>
    </div>
  )
}

export default Dashboard