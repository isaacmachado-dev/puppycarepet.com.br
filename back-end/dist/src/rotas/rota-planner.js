"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nearestNeighbor = nearestNeighbor;
function nearestNeighbor(points, startIdx = 0) {
    const remaining = new Set(points.map((_, i) => i));
    let order = [startIdx];
    remaining.delete(startIdx);
    let curr = startIdx;
    while (remaining.size) {
        let next = -1, best = Infinity;
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
function haversine(a, b) {
    const R = 6371;
    const toRad = (x) => (x * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const s = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(s));
}
//# sourceMappingURL=rota-planner.js.map