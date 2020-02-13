class Puzzle < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :task
end
