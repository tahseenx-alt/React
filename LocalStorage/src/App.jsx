import React from 'react'

function App() {


  localStorage.setItem('age', '18');
  const age = localStorage.getItem('age');
  console.log(age);

  localStorage.removeItem('age')

  const user = {
    username: 'Tahseen',
    age: 19,
    city: 'Bhopal'
  }
  console.log(user);
  localStorage.setItem('User',JSON.stringify(user)) // JSON.stringify is used to convert to string and JSON parse is used to convert to original
  return (
    <div>
      App
    </div>
  )
}

export default App
