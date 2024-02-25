defmodule CatWeb.UserSessionController do
  use CatWeb, :controller

  alias Cat.Accounts
  alias CatWeb.UserAuth

  action_fallback CatWeb.FallbackController

  def new(conn, _params) do
    render(conn, :new, error_message: nil)
  end

  def create(conn, %{"user" => user_params}) do
    %{"email" => email, "password" => password} = user_params

    if user = Accounts.get_user_by_email_and_password(email, password) do
      conn
      |> put_flash(:info, "Welcome back!")
      |> UserAuth.log_in_user(user, user_params)
      |> render(:create, user: user)
    else
      # In order to prevent user enumeration attacks, don't disclose whether the email is registered.
      {:error, :unauthorized, %{message: "Invalid email or password"}}
    end
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "Logged out successfully.")
    |> UserAuth.log_out_user()
  end
end
