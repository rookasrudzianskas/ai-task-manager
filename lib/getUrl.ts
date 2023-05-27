import {storage} from "@/appwrite";

const getUrl = async (image: Image) => {
  const url = await storage.getFilePreview(image.bucketId, image.fileId);
  return url;
}

export default getUrl;
