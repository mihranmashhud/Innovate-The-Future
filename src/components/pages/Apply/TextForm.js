import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
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
class TextForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl margin='normal' required={this.props.required} fullWidth>
          <InputLabel
            htmlFor={this.props.label}
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}>
            {this.props.label}
          </InputLabel>
          <Input
            id={this.props.id}
            name={this.props.label}
            autoComplete={this.props.label}
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

export default withStyles(styles)(TextForm);
