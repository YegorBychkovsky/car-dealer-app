import { fetchData } from "@/api/constants";

export const getFiltersData = async () => {
  return await fetchData(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );
};
export const fetchVehicleData = async (makeId, year) => {
  return await fetchData(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
};
