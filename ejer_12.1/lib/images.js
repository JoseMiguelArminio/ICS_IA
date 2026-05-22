import clientPromise from "./mongodb";

export async function getImages() {

    const client = await clientPromise;

    const db = client.db("images_db");

    const images = await db.collection("images").find({}).sort({ createdAt: -1 }).toArray();

    return images;
}

export async function createImage(image) {

    const client = await clientPromise;

    const db = client.db("images_db");

    const result = await db.collection("images").insertOne(image);

    return result;
}

export async function searchImages(tags) {

    const client = await clientPromise;

    const db = client.db("images_db");

    const query = {
        tags: { $in: tags }
    };

    const images = await db.collection("images").find(query).toArray();

    return images;
}

export async function searchImages(tags) {

    const client = await clientPromise;

    const db = client.db("images_db");

    const query = {
        tags: { $in: tags }
    };

    const images = await db.collection("images").find(query).toArray();

    return images;
}