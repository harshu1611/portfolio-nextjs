import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import {v2 as cloudinary} from 'cloudinary'

export const POST = async (req:NextRequest) => {
  const {url} = await req.json()

  cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
  })
  const uploadResult = await cloudinary.uploader
       .upload(
           url
       )
       .catch((error) => {
           console.log(error);
       });
    
  return NextResponse.json({status:200, url:uploadResult?.url})

};