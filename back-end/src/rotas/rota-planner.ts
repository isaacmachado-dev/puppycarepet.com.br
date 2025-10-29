// src/rotas/rota-planner.ts
export function nearestNeighbor(
  points: { id: string; lat: number; lng: number }[],
  startIdx = 0,
) {
  const remaining = new Set(points.map((_, i) => i));
  let order: number[] = [startIdx];
  remaining.delete(startIdx);

  let curr = startIdx;
  while (remaining.size) {
    let next = -1,
      best = Infinity;
    for (const i of remaining) {
      const d = haversine(points[curr], points[i]);
      if (d < best) {
        best = d;
        next = i;
      }
    }
    order.push(next);
    remaining.delete(next);
    curr = next;
  }
  return order.map((i) => points[i].id);
}

function haversine(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) {
  const R = 6371; // km
  const toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
