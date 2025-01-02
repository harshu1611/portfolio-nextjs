import prisma from "@/app/config/db.config";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST=async(req:NextRequest)=>{
    const { name, description, stack, stackImages, image, github, live} =await req.json();
  

    
    try {
        const newProject= await prisma.projects.create({
            data: {
                name: name,
                description: description,
                stack: stack,
                stackImages: stackImages,
                image: image,
                github: github,
                live:live
            }
        })

        
    return NextResponse.json({message:"Project Created",newProject})
    } catch (error) {
        return NextResponse.json({message:"Error Creating Project", error})
    }
 
}


