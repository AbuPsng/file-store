export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINTS!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTIONS!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTIONS!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET,
  secretKey: process.env.NEXT_APPWRITE_SECRET!,
};
