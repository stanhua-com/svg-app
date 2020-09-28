import { SVG } from '@svgdotjs/svg.js'

import ContextMenu from '@/components/common/contextMenu/index.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      loadingShow: true,
      contextMenuTarget: document.body,
      contextMenuVisible: false,
    }
  },
  computed: {

  },
  components: {
    ContextMenu
  },
  mounted() {
    this.drawsSvg()
  },
  methods: {
    drawsSvg() {
      const draw = SVG().addTo('#svg').size(300, 300)
      const rect = draw.rect(100, 100).attr({ fill: '#f06' })
      rect.linkTo(function (link) {
        link.to('http://svgdotjs.github.io/').target('_blank')
      })
    }
  }
}