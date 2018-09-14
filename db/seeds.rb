# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
user1 = User.create!({ username: 'Adam615', password: 'password', email: 'adamlong1066@gmail.com' })
user2 = User.create!({ username: 'BVila', password: 'oldhouse', email: 'bvilla@thisoldhouse.com' })

Project.delete_all
bookshelf = Project.create!({
  title: 'Brooklyn Bookshelf',
  description: 'A wood and metal bookshelf I built before moving to Brooklyn',
  user_id: User.find_by(username: 'Adam615').id
   })
test = Project.create!({
  title: 'Dummy seed',
  description: 'A stupid seed I used to test',
  user_id: User.find_by(username: 'Adam615').id
   })
