export const createUser = (user) => {
  return fetch("http://localhost:3007/user", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 409) {
        throw new Error("User already exists")
      }

      if (response.status !== 200) {
        throw new Error("An error occurred")
      }

      return response.json()
    })
    .catch((error) => console.error(error.message))
}

export const authUser = (login) => {
  return fetch("http://localhost:3007/auth", {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status === 401) {
      throw new Error("Provided credentials doesn't match any valid user")
    }

    if (response.status !== 200) {
      throw new Error("An error occurred")
    }

    return response.json()
  })
}
