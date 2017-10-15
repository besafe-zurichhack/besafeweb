const mixin = {
  computed: {
    mappedUser () {
      var x = {}
      for (var i in this.user) {
        x[this.user[i]['.key']] = this.user[i]['.value']
      }
      return x
    }
  }
}
export default mixin
