export async function fetchActivities() {
  try {
    const response = await fetch(
      "https://mock.apidog.com/m1/873119-854329-default/activities"
    );
    if (!response.ok) {
      throw new Error("Error al obtener actividades");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
