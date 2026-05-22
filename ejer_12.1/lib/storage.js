import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: "auto",
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY
    }
});

export async function uploadFileToStorage(buffer, filename, contentType) {

    await s3.send(
        new PutObjectCommand({
            Bucket: process.env.S3_BUCKET,
            Key: filename,
            Body: buffer,
            ContentType: contentType
        })
    );

    return `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${filename}`;
}