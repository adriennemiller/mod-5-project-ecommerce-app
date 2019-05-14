class LineItemSerializer < ActiveModel::Serializer
  belongs_to :product
  belongs_to :cart
  attributes :id, :quantity, :product_id, :order_id
end
