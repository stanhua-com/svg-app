import { SVG } from '@svgdotjs/svg.js'

export default {
  name: 'HomePage',
  data() {
    return {
      loadingShow: true,
    }
  },
  computed: {

  },
  components: {
  },
  mounted() {
    this.drawsSvg()
  },
  methods: {
    drawsSvg() {
      const draw = SVG().addTo('#svg').size(256, 256)
      const rect = draw.rect(100, 100).attr({ fill: '#f06' })
      rect.linkTo(function (link) {
        link.to('http://svgdotjs.github.io/').target('_blank')
      })
    }
  }
}