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
interface userData{
  first_name:string;
  last_name:string;
  phone_no:string;
  email_address:string;
  created_date:string;
  auid:string;
}
export async function POST(req:Request){
    try{
        const data=await req.json();
        const a=await client.connect()

        const userdata:userData={
          first_name:data.firstName,
          last_name:data.lastName,
          phone_no:data.phone,
          email_address:data.email,
          created_date:`${Date.now()}`,
          auid:`${data.phone}${Date.now()}`
        }
      
        if(a){
            
            const db= client.db('ayuraksha');
            const user= db.collection('users_data')
            const otpdb= db.collection('otp')
            const  otp=await otpdb.findOne({email_id:data.email})
            if(otp){      
            const check_user= await user.findOne({email_address:data.email});
            if(!check_user && otp.otp === data.otp){
                const register=await user.insertOne(userdata);
                if(register){
                    return NextResponse.json({success:true,message:'registered successfull'})
                }
            }
            else if(otp.otp !== data.otp){
            return NextResponse.json({success:false,message:'Otp expired'})
            }
            else{
            return NextResponse.json({success:false,message:'already registered'})
            }
            
           
            
        }else{
        return NextResponse.json({success:false,message:'verification failed'})
        }
      }
    }catch(e){
        console.log(e)
    }
    
    return NextResponse.json({success:false,message:'something went wrong'})
}