defmodule CatWeb.UserRegistrationController do
  use CatWeb, :controller

  alias Cat.Accounts
  alias Cat.Accounts.User
  alias CatWeb.UserAuth

  action_fallback CatWeb.FallbackController

  def new(conn, _params) do
    changeset = Accounts.change_user_registration(%User{})
    render(conn, :new, changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, user} <- Accounts.register_user(user_params),
         {:ok, _} <- Accounts.deliver_user_confirmation_instructions(
             user,
             &url(~p"/users/confirm/#{&1}")
           ) do
      conn
      |> put_flash(:info, "User created successfully.")
      |> UserAuth.log_in_user(user)
      |> render(:register_success)
    end
  end
end
