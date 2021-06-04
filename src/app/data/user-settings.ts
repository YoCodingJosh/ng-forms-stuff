export interface UserSettings {
  name: string | null,
  emailOffers: boolean | null,
  interfaceStyle: string | null, // should be enum
  subscriptionType: string | null, // should be enum
  notes: string | null
}
