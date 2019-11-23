var app = new Vue({
  el: '#app',

  data: {
    nouns: null,
    adjectives: null,
    tinycolor: tinycolor('#FFFFFF'),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  },

  computed: {
    hexString: function () {
      return this.tinycolor.toHexString()
    },
    secondaryColor: function () {
      return tinycolor(this.tinycolor).monochromatic()[2].toHexString()
    }
  },

  methods: {
    randomHex: function () {
      this.tinycolor = tinycolor.random()
    },
    randomNoun: function () {
      this.noun = this.nouns[Math.floor(Math.random() * this.nouns.length)]
    },
    randomAdjective: function () {
      return this.adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)]
    },
    buildUrl: function(param) {
      return `https://www.randomlists.com/data/${param}.json`
    },
    getWord: function(type) {
      var url = this.buildUrl(type);
      axios
        .get(url, {headers: this.headers})
        .then((response) => {
          if( type == 'nouns' ) {
            this.nouns = response.data.data;
          } else if ( type == 'adjectives' ) {
            this.adjectives = response.data.data;
          } else { return }
        })
        .catch( error => { console.log(`My Error: ${error}`); });
    },
    randomize: function() {
      this.randomHex();
      this.getWord('nouns');
      this.getWord('adjectives');
    }
  }
});
