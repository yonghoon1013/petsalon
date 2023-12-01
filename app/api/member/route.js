import { dbConnect } from "../route";


export async function GET(req, res) {
    const collection = await dbConnect("member");
    // let data = await collection.find({id: "hmmm", password: "12345"}).toArray();
    let data = await collection.find().toArray();

    return Response.json(data);
}

export async function POST(req, res) {
    const qData = await req.json();
    const collection = await dbConnect("member");
    console.log(qData);
    await collection.insertOne({id: qData.id, password: qData.pw, nickname:qData.nick, key: qData.key});
    const dataGet = await collection.find().toArray();

    return Response.json(dataGet);
}

export async function DELETE(req, res) {
    let qData = await Object.fromEntries(req.nextUrl.searchParams);
    const collection = await dbConnect("member");
    console.log(qData);
    await collection.deleteOne({id: qData.id});
    const dataGet = await collection.find().toArray();

    return Response.json(dataGet);
}

export async function PUT(req, res) {
    const qData = await req.json();
    const collection = await dbConnect("member");
    console.log(qData);
    await collection.updateOne({id: qData.id, password: qData.password}, {$set: {id: qData.mId}});
    const dataGet = await collection.find().toArray();

    return Response.json(dataGet);
}