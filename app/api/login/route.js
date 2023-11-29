
import { dbConnect } from "../route";

export async function GET(req, res){
    const collection = await dbConnect("member");
    let data = await collection.find().toArray();

    return Response.json(data);
}