import { Field } from "react-final-form";

export default function TextField({
  id,
  name,
  label,
  helperText,
  inputType,
  autoComplete,
  validate,
}) {
  inputType = inputType || "input";
  id = id || name;

  return (
    <Field name={name} validate={validate}>
      {(props) => (
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          <input
            type={inputType}
            className="form-control"
            id={id}
            placeholder={label}
            autoComplete={autoComplete}
            {...props.input}
          />
          {props.meta.error && props.meta.touched ? (
            <small className="error-helper">{props.meta.error}</small>
          ) : (
            <small className="normal-helper">{helperText}</small>
          )}
        </div>
      )}
    </Field>
  );
}
