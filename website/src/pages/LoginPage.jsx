import * as React from "react";
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
import axios from "axios";
import TextField from "../components/TextField";

function LoginForm() {
  const onSubmit = (values) => {
    return axios.post("/api/users/log_in", { user: values }).then(
      () => {},
      (error) => {
        let formErrors = {}
        if (error.response) {
          const { message } = error.response.data || {}

          if (message) {
            formErrors[FORM_ERROR] = message
          }
        }

        return formErrors;
      },
    );
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        submitError,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="card-container">
            <div className="card-title">用户登录</div>
            <div className="card-content">
              <div style={{ marginTop: "20px" }}>
                <TextField
                  name="email"
                  inputType="email"
                  validate={composeValidators(required, mustBeEmail)}
                  label="邮箱"
                />
                <TextField
                  name="password"
                  inputType="password"
                  label="密码"
                  autoComplete="on"
                  validate={composeValidators(
                    required,
                    minLength(10),
                    maxLength(20),
                  )}
                />
              </div>

              {submitError && (
                <div className="error-message">{submitError}</div>
              )}
            </div>
            <div className="card-actions">
              <button
                className="form-button-cancel"
                type="button"
                onClick={form.restart}
              >
                重置
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
  useBodyClassName("login-page");

  return (
    <section className="login-container">
      <LoginForm />
    </section>
  );
};
