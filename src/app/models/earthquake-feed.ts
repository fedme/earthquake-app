export class EarthquakeFeed {

    type: string;
    metadata: {
        generated: number,
        url: string,
        title: string,
        status: number,
        api: string,
        count: number
    };
    features: any[]; // TODO
}
