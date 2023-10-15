/* 
 * @Format WordPress Styles & Scripts
 * Ayuda a devolver un arreglo con las url filtradas y concatenadas con su versión
*/
interface EnqueuedStyles {
    enqueuedStylesheets: {
        nodes: {
            src: string;
            version: string;
        }[];
    }[];
}

interface EnqueuedScripts {
    enqueuedScripts: {
        nodes: {
            src: string;
            version: string;
        }[];
    }[];
}

const completeUrl = (urls) => {
    return urls.map((url) => {
        if (url && url.startsWith("/") && domain) {
            return domain + url;
        }
        return url;
    })

};
const domain: string = "#DOMAIN_NAME";

export const formatEnqueueUrls = (nodeTerms: EnqueuedStyles | EnqueuedScripts) => {
    const res = nodeTerms;
    let objNodes = null;
    let objTerms = null;

    for (const key in res[0]) {
        if (res[0].hasOwnProperty(key) && typeof res[0][key] === "object") {
            objNodes = res[0][key];
            for (const key in objNodes) {
                objTerms = objNodes[key];
                break;
            }
        }
    }
    if (!objTerms) {
        return [];
    }
    const formattedUrls: string = objTerms
        .filter((item) => item.src !== null)
        .map((item) => `${item.src}?ver=${item.version}`);
    return completeUrl(formattedUrls);
};

/* 
 * @ Extract Image Objects
 * Ayuda a extraer los objetos que contienen las imagenes del campo personalizado para el tipo de contenido "Proyectos".
*/
export const extractImageObjects = (imageGallery: object) => {
    const imageObjects = [];

    for (const key in imageGallery) {
        if (Object.hasOwnProperty.call(imageGallery, key)) {
            const imageObject = imageGallery[key];
            if (imageObject !== null) {
                imageObjects.push(imageObject);
            }
        }
    }

    return imageObjects;
};