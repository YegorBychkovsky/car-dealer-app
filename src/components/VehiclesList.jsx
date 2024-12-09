export async function VehiclesList({ vehicleData }) {
  return (
    <ul className="grid gap-4">
      {vehicleData.Results.map((vehicle) => (
        <li key={vehicle.Model_ID} className="p-4 bg-white shadow rounded">
          {vehicle.Model_Name}
        </li>
      ))}
    </ul>
  );
}
