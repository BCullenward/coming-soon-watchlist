export interface IUserWatchList {
  userid: number,
  watchlist: {
    books?: IBooklist[],
    movies?: IMovielist[]
  }
}

export interface IBooklist {
  id: string
}

export interface IMovielist {
  id: string
}
