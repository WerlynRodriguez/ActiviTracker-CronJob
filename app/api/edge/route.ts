export const runtime = 'edge'; // 'nodejs' is the default
export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// process.env.PASS
export async function GET(request: Request) {

    try {
        const url = 'https://activititracker-rest.onrender.com/api/jobs/desactivateUsers'

        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // The boddy needs a pass to be sent
            body: JSON.stringify({ pass: process.env.PASS }),
        });

        if (result.ok) return new Response('Success', { status: 200 });
        
        return new Response('Error', { status: 500 });
        
    } catch (e) {
        return new Response('Error', { status: 500 });
    }
}