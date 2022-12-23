// const User = {
//   name: "joey",
//   email: "j@jm.com",
//   isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "joey", isPaid: false, email: "j@j.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//   return {name: "reactJS", price: 399}
// }

// TYPE ALIAS


type User = {
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  return {name: "", email: "",}
}

createUser({name: "", email: "", isActive: true})

export {}