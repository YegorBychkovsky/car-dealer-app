import { getFiltersData } from "@/api/getApi";
import ClientButton from "@/components/ClientButton"; // Импортируем клиентский компонент

export default async function FilterPage() {
  const { Results } = await getFiltersData();

  return (
    <div className="flex flex-col items-center justify-center grow bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Filter Vehicles</h1>
      <form>
        <select
          id={"makeSelect"}
          className="p-2 mb-4 border rounded"
          name="make"
          defaultValue=""
        >
          <option value="">Select Vehicle Make</option>
          {Results.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>

        <select
          id={"yearSelect"}
          className="p-2 mb-4 border rounded"
          name="year"
          defaultValue=""
        >
          <option value="">Select Model Year</option>
          {Array.from(
            { length: new Date().getFullYear() - 2015 + 1 },
            (_, i) => 2015 + i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <ClientButton makeSelectId="makeSelect" yearSelectId="yearSelect" />
      </form>
    </div>
  );
}
