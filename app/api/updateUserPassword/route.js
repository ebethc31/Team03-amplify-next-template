import { createConnection } from '@/lib/db.js';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { User_id, User_Password } = await request.json();

        if (!User_id || !User_Password) {
            return NextResponse.json({ error: "User_id and User_Password are required" }, { status: 400 });
        }

        const db = await createConnection();

        const sql = "UPDATE USER SET User_Password = ? WHERE User_id = ?";
        const [result] = await db.query(sql, [User_Password, User_id]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: "User not found or password unchanged" }, { status: 404 });
        }

        return NextResponse.json({ message: "Password updated successfully" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}