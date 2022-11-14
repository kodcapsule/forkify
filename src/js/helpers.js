export async function getJSON(url) {
  try {
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();

    return data;
    if (!res.ok) throw new Error(`${data.message}`);
  } catch (err) {}
}
