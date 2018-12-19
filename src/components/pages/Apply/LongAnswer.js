import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  cssLabel: {
    color: theme.palette.secondary.main,
    "&$cssFocused": {
      color: theme.palette.secondary.main
    }
  },
  cssFocused: {}
});
class LongAnswer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl margin='normal' required={this.props.required} fullWidth variant='filled'>
          <InputLabel
            htmlFor={this.props.label}
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}>
            {this.props.label}
          </InputLabel>
          <FilledInput
            id={this.props.id}
            name={this.props.label}
            autoComplete='null'
            multiline
            rows={this.props.rows}
            classes={{
              root: classes.inputRoot
            }}
            onChange={this.props.onChange}
            value={this.props.value}
            readOnly={this.props.readOnly}
            inputProps={{
              maxLength: this.props.maxLength
            }}
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(LongAnswer);
