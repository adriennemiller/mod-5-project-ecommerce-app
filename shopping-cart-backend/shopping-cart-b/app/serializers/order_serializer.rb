class OrderSerializer < ActiveModel::Serializer
  has_many :line_items
  attributes :id, :user_id
end
