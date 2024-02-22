import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import useBodyClassName from "../hooks/useBodyClassName";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import {
  required,
  mustBeEmail,
  maxLength,
  minLength,
  mustBeRegex,
  composeValidators,
} from "../mods/validator";
import axios from 'axios';

function TextField({
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

function RegisterCard() {
  const onSubmit = (values) => {
    return axios.post('/api/users/register', { user: values }).then(
      () => {},
      (error) => {
        return { [FORM_ERROR]: error.message || "发生了奇怪的错误" };
      }
    )
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values, submitError }) => (
        <form onSubmit={handleSubmit}>
          <div className="card-container">
            <div className="card-title">用户注册</div>
            <div className="card-content">
              <div style={{ marginTop: "20px" }}>
                <TextField
                  name="email"
                  inputType="email"
                  validate={composeValidators(required, mustBeEmail)}
                  label="邮箱"
                  helperText="不会在公开地方展示"
                />
                <TextField
                  name="username"
                  label="用户ID"
                  helperText="唯一英文ID,不能使用空格,短"
                  validate={composeValidators(
                    required,
                    mustBeRegex(
                      /[0-9a-zA-Z]/i,
                      "正确的格式为英文或数字，不能有空格，全站唯一",
                    ),
                    minLength(3),
                    maxLength(10),
                  )}
                />
                <TextField
                  name="nickname"
                  label="昵称"
                  helperText="昵称，用户名"
                  validate={composeValidators(
                    required,
                    minLength(3),
                    maxLength(10),
                  )}
                />
                <TextField
                  name="password"
                  inputType="password"
                  label="密码"
                  helperText="最少10位"
                  autoComplete="on"
                  validate={composeValidators(
                    required,
                    minLength(10),
                    maxLength(20),
                  )}
                />
              </div>

              {submitError && <div className="error-message">{submitError}</div>}
            </div>
            <div className="card-actions">
              <button className="form-button-cancel" type="button">
                登录
              </button>
              <button className="form-button-submit" type="submit">
                提交
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
}

export default () => {
  useBodyClassName("register-page");

  return (
    <section className="register-container">
      <RegisterCard />
    </section>
  );
};
