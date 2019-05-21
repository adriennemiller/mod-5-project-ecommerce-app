class OrderSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :product
  attributes :id, :quantity, :product_id, :user_id
end
