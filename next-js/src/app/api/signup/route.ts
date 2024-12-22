import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req:NextRequest){
    const body = await req.json();
    console.log(body)
    const {username,password} = body
    const id = 1

    const token = jwt.sign({id:id,username:username,password:password},"JWT_SECRET")
    
    return NextResponse.json({
        token:token
    })

}