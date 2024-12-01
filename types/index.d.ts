/* eslint-disable no-unused-vars */

declare type FileType = "document" | "image" | "video" | "audio" | "other";

declare type File = {
  $collectionId: string;
  $createdAt: string; // ISO date string
  $databaseId: string;
  $id: string;
  $permissions: string[]; // Array of permissions
  $updatedAt: string; // ISO date string
  accountId: string;
  bucketFieldId: string;
  extension: string; // File extension (e.g., "mp3")
  name: string; // File name
  owner: {
    fullName: string;
    email: string;
    avatar: string; // URL to avatar
    accountId: string;
    $id: string;
    [key: string]: any; // If there are additional properties
  };
  size: number; // File size in bytes
  type: string; // File type (e.g., "audio")
  url: string; // URL to access the file
  users: string[]; // List of users
  [key: string]: any; // Optional, to allow additional properties
};

declare interface ActionType {
  label: string;
  icon: string;
  value: string;
}

declare interface SearchParamProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

declare interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}
declare interface GetFilesProps {
  types: FileType[];
  searchText?: string;
  sort?: string;
  limit?: number;
}
declare interface RenameFileProps {
  fileId: string;
  name: string;
  extension: string;
  path: string;
}
declare interface UpdateFileUsersProps {
  fileId: string;
  emails: string[];
  path: string;
}
declare interface DeleteFileProps {
  fileId: string;
  bucketFieldId: string;
  path: string;
}

declare interface FileUploaderProps {
  ownerId: string;
  accountId: string;
  className?: string;
}

declare interface MobileNavigationProps {
  ownerId: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}
declare interface SidebarProps {
  fullName: string;
  avatar: string;
  email: string;
}

declare interface ThumbnailProps {
  type: string;
  extension: string;
  url: string;
  className?: string;
  imageClassName?: string;
}

declare interface ShareInputProps {
  file: Models.Document;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (email: string) => void;
}
