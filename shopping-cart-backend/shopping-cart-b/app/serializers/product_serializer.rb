class ProductSerializer < ActiveModel::Serializer
  has_many :orders
  attributes :id, :name, :description, :img, :price
end
