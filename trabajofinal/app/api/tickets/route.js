import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongo from "@/lib/mongo";

const TicketSchema = new mongoose.Schema({
  user_id: Number,
  equipo_id: Number,
  title: String,
  description: String,
  priority: String,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Ticket =
  mongoose.models.Ticket ||
  mongoose.model("Ticket", TicketSchema);


// GET
export async function GET() {

  await connectMongo();

  const tickets = await Ticket.find();

  return NextResponse.json(tickets);
}


// POST
export async function POST(req) {

  await connectMongo();

  const body = await req.json();

  const ticket = await Ticket.create(body);

  return NextResponse.json(ticket);
}