import { fetchVehicleData, getFiltersData } from '@/api/getApi'
import { VehiclesList } from '@/components/VehiclesList'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const data = await getFiltersData()
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i) // Годы с 2015 по текущий

  const params = []

  data.Results.forEach((make) => {
    years.forEach((year) => {
      params.push({
        makeId: make.MakeId,
        year: year.toString(),
      })
    })
  })

  return params.map(({ makeId, year }) => ({
    params: { makeId, year },
  }))
}

export default async function ResultPage({ params }) {
  const { makeId, year } = await params

  const vehicleData = await fetchVehicleData(makeId, year)
  const makeName = vehicleData.Results[0].Make_Name

  return (
    <div className='flex justify-center items-center grow bg-gray-100 p-8'>
      <div className={'max-w-3xl'}>
        <h1 className='text-2xl font-bold mb-4'>
          Vehicle Models for {makeName} in {year} Year
        </h1>
        <Suspense fallback={<p>Loading...</p>}>
          <VehiclesList vehicleData={vehicleData} />
        </Suspense>
      </div>
    </div>
  )
}
