const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  } else {
        let init = Number(sampleActivity);
        if (init <= 0 || init > 15 || isNaN(init) || init == null) {
          return false;
        } else { 
          console.log(init);
          let k = 0.693 / HALF_LIFE_PERIOD;
          let ratio = MODERN_ACTIVITY / init;
          let age = Math.ceil(Math.log(ratio) / k);
          return age;
        }
  }
};
