Rails.application.routes.draw do
  resources :orders
  resources :line_items
  resources :products
  resources :users, only: [:create, :update]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


