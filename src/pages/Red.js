import { useEffect, useState } from 'react'
import { Redirect, Switch } from 'react-router'

export const Red = () => {
  useEffect(() => {
    localStorage.setItem('activePage', '/red')
  }, [])

  const time = localStorage.getItem('counter') || 10
  const [doSwitch, setDoSwitch] = useState(false)
  setTimeout(() => setDoSwitch(!doSwitch), time * 1000)
  const [counter, setCounter] = useState(time)
  setTimeout(() => setCounter(counter - 1), 1000)
  useEffect(() => {
    localStorage.setItem('counter', counter)
  }, [counter])
  if (doSwitch) {
    localStorage.removeItem('counter')
    return (
      <Switch>
        <Redirect to="/yellow" />
      </Switch>
    )
  }

  return (
    <div className="container">
      <div className="trafficLight">
        <div className={'circle red main ' + (counter < 4 ? 'blink' : null)}>
          <span>{counter}</span>
        </div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
    </div>
  )
}
