export class EarthquakeDetails {

    ciimImg: string;
    ciimGeoImg: string;
    plotAttenImg: string;
    plotNumRespImg: string;

    // TODO: add other properties

    constructor(obj?: any) {
        try {
            this.ciimImg = obj && obj.properties.products.dyfi[0].contents[`${obj.id}_ciim.jpg`].url || null;
            this.ciimGeoImg = obj && obj.properties.products.dyfi[0].contents[`${obj.id}_ciim_geo.jpg`].url || null;
            this.plotAttenImg = obj && obj.properties.products.dyfi[0].contents[`${obj.id}_plot_atten.jpg`].url || null;
            this.plotNumRespImg = obj && obj.properties.products.dyfi[0].contents[`${obj.id}_plot_numresp.jpg`].url || null;
        } catch (error) {
            // console.log('This earthquake has no attached pictures');
        }
    }

}
