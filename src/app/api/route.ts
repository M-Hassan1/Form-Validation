import { db, formDataDrizzle } from "@/Drizzle/drizzle";
import { NextResponse } from "next/server";

export async function GET(){
    try {
       let allformdata = await db.select().from(formDataDrizzle);
        let res = await db.select().from(formDataDrizzle)
        console.log("data : ", allformdata);
        
        return NextResponse.json({ allformdata })
    } catch (error) {
        console.log("error : " , (error as {message :  string}).message);
        
        return NextResponse.json({ error })
        
    }
}