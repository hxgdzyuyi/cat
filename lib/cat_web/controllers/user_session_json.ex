defmodule CatWeb.UserSessionJSON do
  alias Phoenix.Flash

  def create(%{ conn: conn, user: user }) do
    flash = conn.assigns.flash

    %{
      data: %{
        user: %{
          email: user.email,
        },
      },
      flash: %{
        info: Flash.get(flash, :info),
        redirect_to: Flash.get(flash, :redirect_to),
      },
    }
  end
end
