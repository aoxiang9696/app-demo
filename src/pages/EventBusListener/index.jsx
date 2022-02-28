import React, { useEffect } from 'react'
import Bus from '../../utils/eventBus'

export default function EventBusListener() {
    useEffect(()=>{
        Bus.addListener('user',()=>{
            console.log(666)
        })

        setTimeout(function() { 
            Bus.emit('user'); 
        }, 1000); 
    },[])
  return (
    <div>index</div>
  )
}
