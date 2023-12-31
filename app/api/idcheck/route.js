import { dbConnect } from "../route";

export async function GET(req){
    const collection = await dbConnect("member");
    const {id} = Object.fromEntries(req.nextUrl.searchParams);
                 
    let data = await collection.find({id}).toArray();
    
    if(data.length > 0) {return Response.json(true);}
    else {return Response.json(false);}
}