const User = {
  name: "joey",
  email: "j@jm.com",
  isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "joey", isPaid: false})

function createCourse():{name: string, price: number}{
  return {name: "reactJS", price: 399}
}

export {}