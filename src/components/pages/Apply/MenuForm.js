import React, { Component } from "react"
import classNames from "classnames"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import MenuItem from "@material-ui/core/MenuItem"
import { FormControl } from "@material-ui/core/FormControl"

class MenuForm extends Component {
  render() {
    // const {classes} = this.props
    return (
      <FormControl>
        <TextField
          select
          label={this.props.label}
          value={this.props.option}
          onChange={this.props.onChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">{this.props.adornmentText}</InputAdornment>
          }}
        >
          {this.props.options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    )
  }
}

export default MenuForm
