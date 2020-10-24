Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

 get 'users/index', to: 'users#index'
 post 'users/create', to: 'users#save'
 get 'users/view/:id', to: 'users#show'
 post 'users/update', to: 'users#update'
 delete 'users/delete/:id', to: 'users#delete'

end
