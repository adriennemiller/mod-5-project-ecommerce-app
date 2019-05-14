class ProductSerializer < ActiveModel::Serializer
  has_many :line_items
  has_many :orders
  attributes :id, :name, :description, :img, :price
end
