interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrial: () => string
  startTrial(): string,
  getCoupon(couponname: string): number,
}

const joey: User = {dbId: 22, email: "j@j.com", userId: 2211, startTrial: () => {return "trial started"}, getCoupon: (name: "joey10") => {
  return 10
}}
joey.email = "j@jm.com"