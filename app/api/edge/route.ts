export const runtime = 'edge'; // 'nodejs' is the default
export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// process.env.PASS
export async function GET(request: Request) {
    console.log("Request init")

    try {
        const url = 'https://activititracker-rest.onrender.com/api/jobs/desactivateUsers'

        console.log("Requesting to backend")
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // The boddy needs a pass to be sent
            body: JSON.stringify({ pass: process.env.PASS }),
        })

        const res = await req.json()

        console.log("Request done", res)
        return new Response(JSON.stringify(res), { status: 200 });
        
    } catch (e) {
        console.error(e);
        return new Response('Error', { status: 500 });
    }
}