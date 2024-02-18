import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import useBodyClassName from "../hooks/useBodyClassName";

function RegisterCard() {
  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <Box component="form" noValidate>
          <TextField id="email" label="邮箱" variant="outlined" margin="normal" sx={{ width: "100%" }} helperText="不会在公开地方展示" />
            <TextField id="username" label="用户ID" variant="outlined" margin="normal" sx={{ width: "100%" }} helperText="唯一英文ID,不能使用空格,短" />
            <TextField id="name" label="昵称" variant="outlined" margin="normal" sx={{ width: "100%" }} helperText="昵称，用户名" />
            <TextField id="password" label="密码" variant="outlined" margin="normal" sx={{ width: "100%" }} helperText="最少10位"/>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained">注册</Button>
        <Button variant="text">登录</Button>
      </CardActions>
    </Card>
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
