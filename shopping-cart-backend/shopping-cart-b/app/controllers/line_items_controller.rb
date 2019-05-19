class LineItemsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        @line_items = LineItems.all
        render json: @LineItems
      end
    
      def update
        @line_item = LineItem.find(params[:id])
        @line_item.update(quantity: params[:quantity], product_id: params[:product_id], order_id: params[order_id])
        if @line_item.save
          render json: @line_item, status: :accepted
        else
          render json: { errors: @item.errors.full_messages }, status: :unprocessible_entity
        end
      end
    

      def show
        @line_item = LineItem.find(params[:id])
        render json: @lineItem
      end

      def create
        @line_item = LineItem.create(line_item_params)
        render json: @line_item
      end

      def destroy
        @line_item = Item.find(params[:id])
        render json: @line_item
        @line_item.delete
      end

      private 

      def line_item_params
        params.require(:quantity).permit(:product_id, :order_id)
      end

end
