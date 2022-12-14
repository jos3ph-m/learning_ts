interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrial: () => string
  startTrial(): string,
  getCoupon(couponname: string, value: number): number,
}

interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const joey: Admin = {dbId: 22, email: "j@j.com", userId: 2211, githubToken: "github", role: "admin",
startTrial: () => {return "trial started"}, 
getCoupon: (name: "joey10", off: 10) => {
  return 10
}}
joey.email = "j@jm.com"