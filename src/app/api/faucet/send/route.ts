import { NextResponse } from 'next/server';
import { validateAddress } from '../../../../../lib/blockchain/validation';

// This tells Next.js how to handle this route in static export
export const dynamic = 'force-static';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { address } = body;
    
    // Validate the address
    if (!validateAddress(address)) {
      return NextResponse.json(
        { success: false, message: 'Invalid testnet address format' },
        { status: 400 }
      );
    }
    
    // Check if the address has recently received tokens
    // This would be implemented with a database in a real app
    
    // In a real implementation:
    // 1. Connect to the Supernova testnet node
    // 2. Send tokens to the provided address
    // 3. Store the request in a database to prevent abuse
    // 4. Return the transaction details
    
    // Mock successful response for now
    return NextResponse.json({
      success: true,
      txid: '7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e',
      amount: 100,
      message: 'Tokens sent successfully!'
    });
    
  } catch (error) {
    console.error('Faucet error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
} 