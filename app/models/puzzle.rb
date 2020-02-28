class Puzzle < ApplicationRecord
  validates :title, presence: true

  belongs_to :user, optional: true
  has_many :task
end
