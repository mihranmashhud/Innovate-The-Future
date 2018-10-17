import React, { Component } from "react"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"

class TextForm extends Component {
  render() {
    return (
      <div>
        <FormControl margin="normal" required={this.props.required}>
          <InputLabel htmlFor={this.props.htmlFor}>{this.props.label}</InputLabel>
          <Input id={this.props.id} name={this.props.name} autoComplete={this.props.autoComplete} autoFocus />
        </FormControl>
      </div>
    )
  }
}

export default TextForm
