import {ID, storage} from "@/appwrite";

export const uploadImage = async (file: File) => {
  if(!file) return;

  const fileUploaded = await storage.createFile(
    "6470cc02534ebadaa097",
    ID.unique(),
    file
  )

  return fileUploaded;
}
