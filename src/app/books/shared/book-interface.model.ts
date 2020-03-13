export interface IBook {
  kind?: string,
  id: string,
  etag?: string,
  selfLink?: string,
  volumeInfo?: {
    title: string,
    authors: string[],
    publisher?: string,
    publishedDate?: string,
    description?: string,
    industryIdentifiers?: IIndustryIdentifiers[],
    readingModes?: {
      text?: boolean,
      image?: boolean
    },
    pageCount?: number,
    printType?: string,
    categories?: string[],
    averageRating?: number,
    ratingsCount?: number,
    maturityRating?: string,
    allowAnonLogging?: boolean,
    contentVersion?: string,
    panelizationSummary?: {
      containsEpubBubbles?: boolean,
      containsImageBubbles?: boolean
    },
    imageLinks?: {
      smallThumbnail?: string,
      thumbnail?: string
    },
    language?: string,
    previewLink?: string,
    infoLink?: string,
    canonicalVolumeLink?: string,
    seriesInfo?: {
      kind?: string,
      bookDisplayNumber?: string,
      volumeSeries?: IVolumeSeries[]
    }
  },
  saleInfo?: {
    country?: string,
    saleability?: string,
    isEbook?: boolean,
    listPrice?: {
      amount?: number,
      currencyCode?: string
    },
    retailPrice?: {
      amount?: number,
      currencyCode?: string,
    },
    buyLink?: string,
    offers?: IOffers[],
  },
  accessInfo?: {
    country?: string,
    viewability?: string,
    embeddable?: boolean,
    publicDomain?: boolean,
    textToSpeechPermission?: string,
    epub?: {
      isAvailable?: boolean,
      acsTokenLink?: string
    },
    pdf?: {
      isAvailable?: boolean,
      acsTokenLink?: string
    },
    webReaderLink?: string,
    accessViewStatus?: string,
    quoteSharingAllowed?: boolean
  },
  searchInfo?: {
    textSnippet?: string
  }
}


export interface IOffers {
  finskyOfferType?: number,
  listPrice?: {
    amountInMicros?: number,
    currencyCode?: string
  },
  retailPrice?: {
    amountInMicros?: number,
    currencyCode?: string
  },
  giftable?: boolean
}

export interface IVolumeSeries {
  seriesId?: string,
  seriesBookType?: string,
  orderNumber?: number
}

export interface IIndustryIdentifiers {
  type?: string,
  identifier?: string
}
