export interface IUserWatchList {
  userid: number,
  watchlist: {
    books?: IBooklist[],
    games?: IGameslist[],
    movies?: IMovielist[],
    music?: IMusiclist[],
    tvshows?: ITvShowslist[]
  }
}

export interface IBooklist {
  id?: string
}

export interface IMovielist {
  id?: string
}

export interface IGameslist {
  id?: string
}

export interface IMusiclist {
  id?: string
}

export interface ITvShowslist {
  id?: string
}
