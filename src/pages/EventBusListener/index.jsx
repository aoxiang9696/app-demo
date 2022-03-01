import React, { useEffect } from 'react'
import Bus from '../../utils/eventBus'

export default function EventBusListener() {
    useEffect(()=>{
        Bus.addListener('user',()=>{
            console.log(666)
        })

        setTimeout(function() { 
            const iMonitor=Bus.emit('user'); 
            console.log(iMonitor);
            console.log(Bus.eventNames)
            console.log((Bus.listeners('user')[0]),'?');
        }, 1000); 
    },[])
  return (
    <div>index</div>
  )
}
