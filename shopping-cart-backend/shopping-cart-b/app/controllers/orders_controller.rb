class OrdersController < ApplicationController
  skip_before_action :authorized
    def index
        @Orders = Order.all
        render json: @Orders
      end
    
      def update
        @order = Order.find(params[:id])
        @order.update(quantity: params[:quantity], product_id: params[:product_id], user_id: params[user_id])
        if @order.save
          render json: @order, status: :accepted
        else
          render json: { errors: @order.errors.full_messages }, status: :unprocessible_entity
        end
      end
    

      def show
        @order = Order.find(params[:id])
        render json: @order
      end

      def create
        # byebug
        @order = Order.new(order_params)
        @order.save!
        render json: @order
      end

      def destroy
        @order = Item.find(params[:id])
        render json: @order
        @order.delete
      end

      private 

      def order_params
        params.permit(:quantity, :product_id, :user_id)
      end

end
