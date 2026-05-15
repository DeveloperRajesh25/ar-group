import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const secret = process.env.SANITY_REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get('sanity-webhook-signature') || '';
    const querySecret = req.nextUrl.searchParams.get('secret');

    if (secret && querySecret !== secret && !signature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    const body = await req.json();
    const slug = body?.slug?.current;
    const type = body?._type;

    if (type === 'venture' && slug) {
      revalidatePath(`/ventures/${slug}`);
      revalidatePath('/ventures');
      revalidatePath('/');
    } else if (type === 'partner') {
      revalidatePath('/managing-partners');
      revalidatePath('/');
    } else if (type === 'siteSettings') {
      revalidatePath('/', 'layout');
    } else {
      revalidatePath('/', 'layout');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
