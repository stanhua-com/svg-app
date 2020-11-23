import Snap from 'snapsvg-cjs'

export default {
  name: 'SnapClockPage',
  data() {
    return {

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
      let s = Snap('#svg')
      let path = ''
      let nums = s.text(300, 300, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
        .attr({ font: '300 40px Helvetica Neue', textAnchor: 'middle' })

      for (let i = 0; i < 72; i++) {
        let r = i % 6 ? i % 3 ? 247 : 240 : 230
        let sin = Math.sin(Snap.rad(5 * i))
        let cos = Math.cos(Snap.rad(5 * i))

        path += 'M' + [300 + 250 * cos, 300 + 250 * sin] + 'L' + [300 + r * cos, 300 + r * sin]

        if (!(i % 6)) {
          nums.select('tspan:nth-child(' + (i / 6 + 1) + ')').attr({
            x: 300 + 200 * Math.cos(Snap.rad(5 * i - 60)),
            y: 300 + 200 * Math.sin(Snap.rad(5 * i - 60)) + 15,
          })
        }
      }

      let table = s.g(nums, s.path(path).attr({
        fill: 'none',
        stroke: '#000',
        strokeWidth: 2
      })).attr({
        transform: 't0,210'
      })

      s.g(table).attr({
        clip: s.circle(300, 300, 100)
      })

      let hand = s.line(300, 200, 300, 400).attr({
        fill: 'none',
        stroke: '#f63',
        strokeWidth: 2
      })

      s.circle(300, 300, 100).attr({
        stroke: '#000',
        strokeWidth: 10,
        fillOpacity: 0
      }).click(() => {
        Snap.animate(0, 360, (val) => {
          table.transform('t' +
            [
              210 * Math.cos(Snap.rad(val + 90)),
              210 * Math.sin(Snap.rad(val + 90))
            ])
          hand.transform('r' + [val, 300, 300])
        }, 12000)
      })

    }
  },
}