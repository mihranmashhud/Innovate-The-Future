import React, { Component } from "react"
import TextForm from "./Apply/TextForm"
import MenuForm from "./Apply/MenuForm"

class Apply extends Component {
  render() {
    return <div>
      <TextForm label="First Name" htmlFor="First Name" required id="first-name" autoComplete="First Name"></TextForm>

    </div>
  }
}

export default Apply