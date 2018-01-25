Rails.application.routes.draw do

  get '/words/:word', to: "words#index"
end
