import React, { useState,useMemo } from 'react'


function HeavyComponent() {
  
  const [count, setCount] = useState(0) 

  const heavywork = () => {
    for(let i =0; i<1000000000; i++){}

    return 100;
  }
  
  const value = useMemo(() => heavywork(),[]);
  console.log(`value는 ${value}입니다.`);
  
  return(
  <>
    <p>나는 엄청 무거운 컴포넌트야</p>
    <button onClick={() =>{
      setCount(count+1)
    }}>누르면 아래 count가 올라가요</button><br/>
    {count}
  </>
  )
}

export default HeavyComponent