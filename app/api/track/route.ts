import { NextResponse } from 'next/server';
import clientPromise from '@/lib/index';

export async function POST(req: Request) {
  try {
    const { visitorId, page, referrer, userAgent } = await req.json();
    
    if (!visitorId) {
      return NextResponse.json(
        { error: 'visitorId is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('nexsol');
    const collection = db.collection('visitors');

    const dateKey = new Date().toISOString().split('T')[0];

    const existing = await collection.findOne({
      dateKey,
      visitorId
    });

    if (existing) {
      await collection.updateOne(
        { _id: existing._id },
        { $set: { timestamp: new Date() } }
      );
    } else {
      await collection.insertOne({
        visitorId,
        page: page || '/',
        referrer: referrer || 'direct',
        userAgent: userAgent || 'unknown',
        dateKey,
        timestamp: new Date()
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Track error:', error);
    return NextResponse.json(
      { error: 'Failed to track visit' },
      { status: 500 }
    );
  }
}