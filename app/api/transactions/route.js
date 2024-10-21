import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Transaction from '@/models/Transaction';

// Connect to the database once at the top
await connectDB();

// Handle GET requests
export async function GET() {
  try {
    const transactions = await Transaction.find();
    return NextResponse.json({ success: true, data: transactions }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

// Handle POST requests
export async function POST(req) {
  try {
    const body = await req.json();
    const transaction = await Transaction.create(body);
    return NextResponse.json({ success: true, data: transaction }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Transaction not added' }, { status: 400 });
  }
}

// Handle DELETE requests
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    await Transaction.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Transaction deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Transaction not deleted' }, { status: 400 });
  }
}
