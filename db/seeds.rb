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
dummy = Project.create!({
  title: 'Live-edge Coffee Table',
  description: 'kind of self-explanatory',
  user_id: User.find_by(username: 'Adam615').id
   })
dummy = Project.create!({
  title: 'Edison Lamps',
  description: 'I totally stole this idea from a craft fair.',
  user_id: User.find_by(username: 'Adam615').id
   })
dummy = Project.create!({
  title: "dummy",
  description: 'I really just need another to fill out the row.',
  user_id: User.find_by(username: 'Adam615').id
   })


Step.delete_all
  bookshelf1 = Step.create!({
    heading: "Cut and mill wood for shelves",
    body: "Decide which parts of your wood will be each shelf and mark them on the back.
    After that, I used a floor-sander instead of a planer which I don't have",
    project_id: Project.find_by(title: 'Brooklyn Bookshelf').id,
    order_number: 1
    })
  bookshelf2 = Step.create!({
    heading: "Cut all your framing",
    body: "I used a cutoff wheel on an angle grinder.  It's not as exact as a band saw,
    but you can grind down to the right size, so cut a little fat.",
    project_id: Project.find_by(title: 'Brooklyn Bookshelf').id,
    order_number: 2
    })
  bookshelf2 = Step.create!({
    heading: "test step",
    body: "You should be used to these tests by now.",
    project_id: Project.find_by(title: 'Edison Lamps').id,
    order_number: 2
    })
