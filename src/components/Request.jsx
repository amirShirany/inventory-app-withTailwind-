// import axios from "axios"
import { useState, useEffect } from "react"
import React from "react"

function Request() {
  const [data, setData] = useState([])
  const Req = async () => {
    try {
      const dataGet = ["1", "2"]
      setData([dataGet])
    } catch (error) {
      console.log("====================================")
      console.log("error")
      console.log("====================================")
    }
  }

  //   useEffect(() => {
  //     Req()
  //   }, [])

  return (
    <div>
      <button onClick={Req}>Button</button>
      <hr />
      {data}
    </div>
  )
}

export default Request
