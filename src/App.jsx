 
import './App.css'
import './Friends.css'
import Counters from './Counter'
import Team from './team'
import Users from './Users'
import Friends from './Friends'

function App() {
  
  function handleClick(){
    alert('Clicked button')

  }
  const addToFive = (num)=>{
    alert(num +5)

  }

  return (
    <>
      
      <h1>React core concept</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counters></Counters>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert('third clicked')}}>Click Me</button>
      <button onClick={() =>addToFive(3)}>four</button>
    </>
  )
}

export default App
