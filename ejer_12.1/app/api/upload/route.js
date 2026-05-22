import { v4 as uuidv4 } from "uuid";

import { analyzeImageWithGroq } from "@/lib/groq";

import clientPromise from "@/lib/mongodb";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function POST(req) {

    try {

        const formData = await req.formData();

        const file = formData.get("file");

        if (!file) {
            return Response.json({ error: "No file provided" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        const filename = `${uuidv4()}.jpg`;

        const s3 = new S3Client({
            region: "auto",
            endpoint: process.env.S3_ENDPOINT,
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_KEY
            }
        });

        await s3.send(new PutObjectCommand({
            Bucket: process.env.S3_BUCKET,
            Key: filename,
            Body: buffer,
            ContentType: file.type
        }));

        const imageUrl = `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${filename}`;

        const tags = await analyzeImageWithGroq(imageUrl);

        const client = await clientPromise;

        const db = client.db("images_db");

        const imageDoc = {
            filename,
            url: imageUrl,
            tags,
            createdAt: new Date()
        };

        await db.collection("images").insertOne(imageDoc);

        return Response.json({ success: true, image: imageDoc });

    } catch (error) {

        return Response.json(
            { error: "Upload failed", details: error.message },
            { status: 500 }
        );
    }
}