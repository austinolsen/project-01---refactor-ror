Rails.application.routes.draw do
  root to: "votes#index"

  resources :votes

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
