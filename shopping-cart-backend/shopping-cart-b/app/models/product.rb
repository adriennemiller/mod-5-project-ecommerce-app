class Product < ApplicationRecord
  has_many :line_items, dependent: :destroy
  has_many :orders, through: :line_items
  validates :name, :description, :img, :price, presence: true
end
