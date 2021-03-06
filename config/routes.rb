Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do
    root :to => "devise/sessions#new"
end
  resources :users,   only: [:index, :show, :edit, :update] do
    resources :puzzles, only: [:new, :create]
  end
  resources :tasks, only: [:new, :create]
  
  
end

