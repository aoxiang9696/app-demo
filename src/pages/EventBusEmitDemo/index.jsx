import React, { useEffect } from 'react'
import Bus from '../../utils/eventBus.js'

export default function EventBusDemo() {
    useEffect(()=>{
      
        Bus.emit('user','1')
        console.log(Bus);
    },[])

  return (
    <div>EventBusDemo</div>
  )
}
