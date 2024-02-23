defmodule CatWeb.UserRegistrationJSON do
  alias Phoenix.Flash

  def register_success(%{ conn: conn }) do
    flash = conn.assigns.flash
    %{
      data: %{},
      flash: %{
        info: Flash.get(flash, :info),
        redirect_to: Flash.get(flash, :redirect_to),
      },
    }
  end
end
