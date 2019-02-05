export const signup = (user)=> {
  return $.ajax({
    method: "POST",
    url: 'api/users',
    data: {user}
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: 'api/session',
  });
};

export const edit = (id,updatedUser) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${id}`,
    data: updatedUser,
    contentType:false,
    processData:false
  });
};

export const editImage = (id, formData) => {
    return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false
  });
};
