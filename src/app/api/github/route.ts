import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = 'Ayush-kathil';

  if (!token) {
    return NextResponse.json({ error: 'GitHub activity temporarily unavailable (Missing GITHUB_TOKEN)' }, { status: 503 });
  }

  const query = `query($username: String!) { user(login: $username) { contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { contributionCount date } } } } } }`;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 }
    });

    if (!res.ok) return NextResponse.json({ error: 'GitHub API failed' }, { status: res.status });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 });
  }
}
