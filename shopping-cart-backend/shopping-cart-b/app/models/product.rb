class Product < ApplicationRecord
  has_many :orders, dependent: :destroy
  validates :name, :description, :img, :price, presence: true
end
