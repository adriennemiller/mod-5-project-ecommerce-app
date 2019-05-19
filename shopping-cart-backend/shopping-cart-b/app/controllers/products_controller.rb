class ProductsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :create]

    def index
        @Products = Product.all
        render json: @Products
      end
    
      def create
        @product = Product.create(product_params)
        render json: @product
      end

      def show
        @product = Product.find(params[:id])
        render json: @item
      end

      private 

      def product_params
        params.require(:name).permit(:description, :img, :price)
      end
end
