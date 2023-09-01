defmodule Cat.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      CatWeb.Telemetry,
      # Start the Ecto repository
      Cat.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Cat.PubSub},
      # Start Finch
      {Finch, name: Cat.Finch},
      # Start the Endpoint (http/https)
      CatWeb.Endpoint
      # Start a worker by calling: Cat.Worker.start_link(arg)
      # {Cat.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Cat.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    CatWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
