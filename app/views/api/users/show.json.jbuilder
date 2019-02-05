json.partial! "api/users/user", user: @user

json.user do
    json.imageUrl url_for(@user.photo)
end
