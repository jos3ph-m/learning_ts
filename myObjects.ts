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


// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// function createUser(user: User): User {
//   return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myUser: User = {
  _id: "1234",
  name: "r",
  email: "r@r.com",
  isActive: false
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

myUser.email = "h@h.com"
// this wont work:
// myUser._id = "asa"

export {}