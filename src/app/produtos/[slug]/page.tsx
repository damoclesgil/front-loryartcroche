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
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          :D
        </h1>
      </div>
    </div>
  )
}
