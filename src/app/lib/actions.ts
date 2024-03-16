const url = "https://supademo.ernestofreyre.com/api/profiles";

export async function getAllProfiles() {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}

export async function getProfileById(id: string) {
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();
  return data;
}
