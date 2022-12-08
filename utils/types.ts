export interface User {
  discordId: string;
  accessToken: string;
  refreshToken: string;
}

export interface Application {
  status: "approved" | "denied" | "pending";
  discordID: string;
  applicationId: string;
  date: Date;
  fields: string[];
}
