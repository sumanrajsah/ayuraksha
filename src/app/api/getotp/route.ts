'use server'
import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import nodemailer from 'nodemailer';

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

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rsuman7868@gmail.com",
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
  });

  function generateSixDigitPassword() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  
export async function POST(req:Request){
    try{
        const data=await req.json();
        console.log(data)
        const a=await client.connect()
        const generateOtp = generateSixDigitPassword();

        if(a){
            
            const db= client.db('ayuraksha');
            const otp= db.collection('otp');
            const mailOptions = {
                from: '"Your Name" rsuman7868@gmail.com',
                to: data.email,
                subject: `OTP`,
                text: generateOtp,
                html: `<p>${generateOtp}</p>`,
              };
              const f= await otp.findOne({email_id:data.email})
              console.log(f)
              if(!f){
                
              
              // Send the email
              await transporter.sendMail(mailOptions);
              await otp.createIndex({ time: 1 }, { expireAfterSeconds: 60 })

            await otp.insertOne({otp:generateOtp,time:new Date(Date.now()),email_id:data.email})
            

           
        
        return NextResponse.json('send')
              }}
    }catch(e){
        console.log(e)
    }
    
    return NextResponse.json('something went wrong')
}