// TODO: Write your class in this file

// TODO: Change undefined to the name of your class

class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }

  occupancy() {
    return { adults: this.adults, children: this.children };
  }

  enter(numAdults, numChildren) {
    // eslint-disable-next-line prettier/prettier
    if (this.children > this.adults || numAdults < 1) {
      return false;
    }
    this.adults += numAdults;
    this.children += numChildren;
    return true;
  }

  leave(numAdults, numChildren) {
    // eslint-disable-next-line prettier/prettier
    if (this.children - numChildren > this.adults - numAdults || numChildren > this.children || numAdults < 1) {
      return false;
    }
    this.adults -= numAdults;
    this.children -= numChildren;
    return true;
  }
}

module.exports = {
  SoftPlay,
};
