# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|image|string|
|email|string|null: false|unique: true|
|password|string|null: false|unique: true|

### Association
- has_many :puzzles

## puzzlesテーブル

|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :tasks
- belongs_to :user



## tasksテーブル

|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|puzzle_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :puzzle