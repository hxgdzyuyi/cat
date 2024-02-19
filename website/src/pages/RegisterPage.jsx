import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import useBodyClassName from "../hooks/useBodyClassName";

function TextField({ id, label, helperText }) {
  return (
    <div className="form-group">
      <label for={id}>{label}</label>
      <input
        type="input"
        className="form-control"
        id={id}
        placeholder={label}
      />
      <small id="{`${id}-helper`}" className="helper-text">
        {helperText}
      </small>
    </div>
  );
}

function RegisterCard() {
  return (
    <div className="card-container">
      <div className="card-title">用户注册</div>
      <div className="card-content">
        <form style={{ marginTop: "20px" }}>
          <TextField id="email" label="邮箱" helperText="不会在公开地方展示" />
          <TextField
            id="username"
            label="用户ID"
            helperText="唯一英文ID,不能使用空格,短"
          />
          <TextField id="name" label="昵称" helperText="昵称，用户名" />
          <TextField id="password" label="密码" helperText="最少10位" />
        </form>
      </div>
      <div className="card-actions">
        <button className="form-button-cancel" type="button">
          取消
        </button>
        <button className="form-button-submit" type="submit">
          提交
        </button>
      </div>
    </div>
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
