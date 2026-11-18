import  {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';


export async function GET(request: NextRequest) {
  const loggedIn = false; 
  if (!loggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};