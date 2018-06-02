const { Botanist } = require('botanist.js');
/*
 * Lets grow some greenery!
 */
export default class Plant {
    constructor(seed) {
        this.traits = {
            species: Botanist.identify(seed),
            age: 0,
            height: 0.0,
            alive: true
        }
    }

    grow = (water, soil, sunlight) => {
        const { species, height, alive } = this.traits;
        if (water >= species.waterRequirement) {
            let nutrients = soil.releaseNutrients() * sunlight;
            height += species.growthRate(nutrients);
            ageDay();
        } else {
            alive = false;
        }
    }

    ageDay = () => {
        this.traits.age++;
    }
}