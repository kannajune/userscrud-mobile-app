class UsersController < ApplicationController

	def index
		@users = User.all
		render json: @users
	end

	def save
		 @user = User.new()
		 @user.firstName = params[:firstName]
		 @user.lastName = params[:lastName]
		 @user.mobile = params[:mobile]
		 @user.address = params[:address]
		 @user.save()
		 render json: { result:"Saved Successfully" }
	end

	def show
		@user = User.find_by(id:  params[:id])
		render json: @user
	end

	def update
		print(params)
		 @user = User.find_by(id:  params[:id])
		 @user.firstName = params[:firstName]
		 @user.lastName = params[:lastName]
		 @user.mobile = params[:mobile]
		 @user.address = params[:address]
		 @user.save()
		 render json: { result:"Updated Successfully" }
	end
   
    def delete
		print(params)
		 @user = User.find_by(id:  params[:id])
		 @user.destroy()
		 render json: { result:"Deleted Successfully" }
	end


end
