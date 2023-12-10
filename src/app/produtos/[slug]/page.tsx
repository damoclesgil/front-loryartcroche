import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  // Generate two pages at build time and the rest (3-100) on-demand
  return [{ id: '1' }, { id: '2' }]
}

export default async function Page({ params }: { params: { id: string } }) {
  if (Number(params.id) >= 100) {
    notFound()
  }

  return (
    <div>
      <h1>:D</h1>
    </div>
  )
}
