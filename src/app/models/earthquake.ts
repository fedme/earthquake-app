import { Point } from './point';
import { EarthquakeDetails } from './earthquake-details';

export class Earthquake {

    id: string;
    title: string;
    mag: number;
    place: string;
    coordinates: Point;
    time: Date;
    updated: Date;
    tz: number;
    url: string;
    detail: string;
    felt: number;
    cdi: number;
    mmi: number;
    alert: string;
    status: string;
    tsunami: boolean;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number;
    dmin: number;
    rms: number;
    gap: number;
    magType: string;
    type: string;
    details: EarthquakeDetails;

    get magnitudeString() {
        return `${this.mag} ${this.magType}`;
    }

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.properties.title || null;
        this.mag = obj && obj.properties.mag || null;
        this.place = obj && obj.properties.place || null;
        this.coordinates = obj && new Point(obj.geometry) || null;
        this.time = obj && new Date(obj.properties.time) || null;
        this.updated = obj && new Date(obj.properties.updated) || null;
        this.tz = obj && obj.properties.tz || null;
        this.url = obj && obj.properties.url || null;
        this.detail = obj && obj.properties.detail || null;
        this.felt = obj && obj.properties.felt || null;
        this.cdi = obj && obj.properties.cdi || null;
        this.mmi = obj && obj.properties.mmi || null;
        this.alert = obj && obj.properties.alert || null;
        this.status = obj && obj.properties.status || null; // TODO: enum?
        this.tsunami = obj && obj.properties.tsunami || null;
        this.sig = obj && obj.properties.sig || null;
        this.net = obj && obj.properties.net || null;
        this.code = obj && obj.properties.ids || null;
        this.sources = obj && obj.properties.sources || null;
        this.types = obj && obj.properties.types || null;
        this.nst = obj && obj.properties.nst || null;
        this.dmin = obj && obj.properties.dmin || null;
        this.rms = obj && obj.properties.rms || null;
        this.gap = obj && obj.properties.gap || null;
        this.magType = obj && obj.properties.magType || null; // TODO: enum?
        this.type = obj && obj.properties.type || null; // TODO: enum?
    }
}
