export interface IUserProfile {
  id: number,
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  location: {
    city: string,
    state?: string,
    country: string
  }

}
