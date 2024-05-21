import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6634dc0200115fad34b9");

export const account = new Account(client);
export { ID } from "appwrite";
