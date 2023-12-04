import { dbConnect } from "../route";

export async function GET (req) {
    const qData = req.nextUrl.searchParams
    const collection = await dbConnect("profPic");
    const data = await collection.find({key: qData.key}).toArray();

    return Response.json(data)
};

export async function POST (req) {
    const qData = await req.json();
    const collection = await dbConnect("profPic");
    await collection.insertOne({imgUrl: qData.imgUrl})
    const data = await collection.find({key: qData.key}).toArray();

    return Response.json(data);
};