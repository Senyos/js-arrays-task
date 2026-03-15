const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN

const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0 || point.length !== 2) return null

    let min = 500
    let minLoc
    for (const loc of locations) {
        let [locName, locPoint] = loc
        let dist = getDistance(point, locPoint)
        if (dist < min) {
            min = getDistance(point, locPoint) < min ? getDistance(point, locPoint) : min
            minLoc = loc
        }
    }
    return minLoc
}

export { getTheNearestLocation }

// END
