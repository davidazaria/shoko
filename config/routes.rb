Rails.application.routes.draw do
  get 'words/index'

  devise_for :users
  root to: 'home#index'
end
