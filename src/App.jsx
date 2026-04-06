import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  function incNum() {
    setnum(num+1);
  }
   function decNum() {
    setnum(num-1);
  }
   function incNum5() {
    setnum(num+5);
  }
   function decNum5() {
    setnum(num-5);
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-evenly bg-pink-200'>
      <div className='h-80 w-80 rounded-full bg-black flex items-center justify-center text-pink-200 text-8xl font-bold'>{num}</div>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-40'>
          <button onClick={incNum} className='bg-black px-14 py-6 rounded-full text-pink-200 font-semibold text-2xl'>Increase by 1</button>
          <button onClick={decNum} className='bg-black px-14 py-6 rounded-full text-pink-200 font-semibold text-2xl'>Decrease by 1</button>
        </div>
        <div className='flex gap-40'>
          <button onClick={incNum5} className='bg-black px-14 py-6 rounded-full text-pink-200 font-semibold text-2xl'>Increase by 5</button>
          <button onClick={decNum5} className='bg-black px-14 py-6 rounded-full text-pink-200 font-semibold text-2xl'>Decrease by 5</button>
        </div>
        
      </div>
    </div>
  )
}

export default App