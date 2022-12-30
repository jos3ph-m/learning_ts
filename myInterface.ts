interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string
}

const joey: User = {dbId: 22, email: "j@j.com", userId: 2211}
joey.email = "j@jm.com"