export interface Tag {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}

export interface Promotion {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Id: number;
  ImageUrl: string;
  PromotionCardColor: string;
  RemainingText: string;
  SeoName: string;
  Title: string;
  ScenarioType: string;
  Unavailable: boolean;
  Unvisible: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  CardType: string;
  ExternalUrl: string | null;
  ExternalType: string | null;
  ExternalRedirectType: string | null;
  ExternalWebviewType: string | null;
  ExternalLoginGate: string | null;
  IsLuckyDay: boolean;
  LuckyDayText: string;
  LuckyDayTextColor: string | null;
  LuckyDayBackgroundColor: string | null;
}

export interface PromotionDetail extends Promotion {
  Description: string;
  EndDate: string;
  CountryTimeZone: number;
  StartDate: string;
  DetailButtonText: string;
  PromotionDetailItemAreas: PromotionDetailItemArea[];
  Contents: any[];
  PromotionTags: any[];
  PromotionGalleries: PromotionGallery[];
  NextFlowConfigurations: any;
  GameWin: any;
}

export interface PromotionDetailItemArea {
  Title: string;
  Description: string;
  OpenedIconUrl: string;
  ClosedIconUrl: string;
  UseMapButton: boolean;
  PromotionDetailItems: PromotionDetailItem[];
}

export interface PromotionDetailItem {
  Title: string;
  Description: string;
  ImageUrl: string;
}

export interface PromotionGallery {
  DocumentUrl: string;
  DocumentType: string;
  CoverImageUrl: string;
}
