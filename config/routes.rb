Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'

  root to: 'words#index'
  get '/words/:word', to: "words#index"
end
