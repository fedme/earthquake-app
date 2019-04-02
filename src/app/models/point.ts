export class Point {

    longitude: number;
    latitude: number;
    depth: number;

    constructor(obj?: any) {
        this.longitude = obj && obj.coordinates[0] || null;
        this.latitude = obj && obj.coordinates[1] || null;
        this.depth = obj && obj.coordinates[2] || null;
    }
}
