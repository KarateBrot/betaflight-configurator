import BuildApi from './BuildApi';
import DarkTheme from './DarkTheme';

export default class Sponsor {

    constructor () {
        this._api = new BuildApi();
        this._timer = setInterval(() => { this.Refresh(); }, 30000);
    }

    Refresh() {
        if (!navigator.onLine) {
            return;
        }

        const activeTheme = DarkTheme.enabled ? 'dark' : 'light';

        const images = [
            `<img src="images/sponsors/hqprop.svg" alt="HQ Prop" class="img_sponsor invertable" />`,
            `<img src="images/sponsors/radiomaster.svg" alt="RadioMaster" class="img_sponsor invertable" />`,
            `<img src="images/sponsors/Axisflying_${activeTheme}.svg" alt="Axisflying" class="img_sponsor" />`,
            `<img src="images/sponsors/dogcom_${activeTheme}.svg" alt="Dogcom" class="img_sponsor" />`,
            `<img src="images/sponsors/foxeer_${activeTheme}.svg" alt="Foxeer" class="img_sponsor" />`,
            `<img src="images/sponsors/tmotor.svg" alt="T-Motor" class="img_sponsor invertable" />`,
        ];

        const links = [
            'https://www.hqprop.com',
            'https://www.radiomasterrc.com',
            'https://www.axisflying.com',
            'https://www.dogcombattery.com',
            'https://www.foxeer.com',
            'https://tmotorhobby.com',
        ];

        const numImages = images.length;
        const numVisible = 3;
        let indices = [];

        for(let i = 0; i < numVisible; i++) {
            let indexRand = Math.floor(Math.random() * numImages);
            while(indices.includes(indexRand)) {
                indexRand = Math.floor(Math.random() * numImages);
            }
            indices.push(indexRand);
        }

        let wrap = $('<div>').attr('style', 'max-height: 100%; height: 100%; width: 100%; text-align: center; margin: 0 auto');

        for(let i = 0; i < indices.length; i++) {
            $('<a>')
                .attr('href', `${links[indices[i]]}`)
                .attr('target', '_blank')
                .html(images[indices[i]])
                .appendTo(wrap);
        }

        wrap.appendTo(div);

        div.show();
    }

    loadSponsorTile(name, div) {
        this._name = name;
        this._div = div;
        this.Refresh();
    }
}
