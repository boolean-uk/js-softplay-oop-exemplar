class SoftPlay {
  constructor () {
    this.adults = 0
    this.children = 0
  }

  occupancy () {
    return { adults: this.adults, children: this.children }
  }

  enter (numAdults, numChildren) {
    if (this.children > this.adults || numAdults < 1) {
      return false
    }
    this.adults += numAdults
    this.children += numChildren
    return true
  }

  leave (numAdults, numChildren) {
    if (this.children - numChildren > this.adults - numAdults || numChildren > this.children || numAdults < 1) {
      return false
    }
    this.adults -= numAdults
    this.children -= numChildren
    return true
  }
}

module.exports = {
  SoftPlay
}
