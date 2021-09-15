import { useEffect, useState } from 'react'
import { Redirect, Switch } from 'react-router'
import './TrafficLight.css'
export const Yellow = () => {
  useEffect(() => {
    localStorage.setItem('activePage', '/yellow')
  }, [])
  const time = localStorage.getItem('counter') || 3
  const [doSwitch, setDoSwitch] = useState(false)
  const reverse =
    (localStorage.getItem('reverse') === 'true' ? true : false) || false

  useEffect(() => {
    localStorage.setItem('reverse', !reverse)
  }, [])
  const [counter, setCounter] = useState(time)
  setTimeout(() => setCounter(counter - 1), 1000)
  setTimeout(() => setDoSwitch(!doSwitch), time * 1000)
  useEffect(() => {
    localStorage.setItem('counter', counter)
  }, [counter])
  if (doSwitch) {
    localStorage.removeItem('counter')
    if (reverse) {
      return (
        <Switch>
          <Redirect to="/red" />
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Redirect to="/green" />
        </Switch>
      )
    }
  }

  return (
    <div className="container">
      <div className="trafficLight">
        <div className="circle red"></div>
        <div className={'circle yellow main ' + (counter < 4 ? 'blink' : null)}>
          <span>{counter}</span>
        </div>
        <div className="circle green"></div>
      </div>
    </div>
  )
}
