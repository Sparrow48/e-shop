import { Cloudinary } from "@cloudinary/url-gen";


export const DEFAULT_COUNTRY_CODE = 'bd'

export const generateImageURL = (publicId) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;

    const cld = new Cloudinary({
        cloud: {
            cloudName
        }
    });
    const myImage = cld.image(publicId);
    const myUrl = myImage.toURL();
    return myUrl
}