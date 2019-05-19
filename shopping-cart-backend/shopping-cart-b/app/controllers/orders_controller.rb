class OrdersController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create]

    def index
        @order = Order.all
        render json: @Orders
      end

      def create
        @order = Order.create(order_params)
        render json: @order
      end
    

      def show
        @order = Order.find(params[:id])
        render json: @order
      end

      private 

      def order_params
        params.require(:user_id)
      end

end
