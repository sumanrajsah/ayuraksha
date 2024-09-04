'use server'
import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const uri =process.env.NEXT_PUBLIC_MONGODB_URI;
let client:MongoClient

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
if (uri) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
} else {
  // Handle the case where uri is undefined
  console.error("URI is undefined");
}
export async function POST(req:Request){
    try{
        const data=await req.json();
        const a=await client.connect()
        console.log(data)
        if(a){
            
            const db= client.db('ayuraksha');
            const user= db.collection('users_data')
            const otpdb= db.collection('otp')
            const  otp=await otpdb.findOne({email_id:data.email})
            if(otp){      
            const check_user= await user.findOne({email:data.email});
            if(!check_user && otp.otp === data.otp){
                const register=await user.insertOne(data);
                if(register){
                    console.log(register,'successfull registered')
                    return NextResponse.json('registered successfull')
                }
            }
            
            console.log(check_user)
            
        }
      }
        
      
        return NextResponse.json('found')
    }catch(e){
        console.log(e)
    }
    
    return NextResponse.json('something went wrong')
}