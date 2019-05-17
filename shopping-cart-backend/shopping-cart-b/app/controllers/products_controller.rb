class ProductsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        @product = Product.all
        render json: @Products
      end
    

      def show
        @product = Product.find(params[:id])
        render json: @item
      end
end
