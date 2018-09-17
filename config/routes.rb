Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :destroy, :edit, :show, :index]
      resources :projects do
        resources :steps, only: [:create, :edit, :show, :index]
      end
  end

    root to: "static_pages#root"
end
