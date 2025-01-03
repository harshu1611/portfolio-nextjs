"use server"

import prisma from "../config/db.config"

export const getProjects=async()=>{
    const projects = await prisma.projects.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return projects
}