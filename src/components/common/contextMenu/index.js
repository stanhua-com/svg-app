export default {
  name: 'ContextMenu',
  props: {
    target: null,
    show: Boolean
  },
  data() {
    return {
      x: 0,
      y: 0,
      style: {}
    }
  },
  computed: {

  },
  components: {

  },
  created() {
    if (!this.target) return
    this.target.addEventListener('contextmenu', this.showMenu)

    document.addEventListener('mousedown', this.hideMenu)
    document.addEventListener('mousewheel', this.hideMenu)
  },
  mounted() {
  },

  beforeDestroy() {
    this.target.removeEventListener('contextmenu', this.showMenu)
    document.removeEventListener('mousedown', this.hideMenu)
    document.removeEventListener('mousewheel', this.hideMenu)
  },
  watch: {
    show(val) {
      // val && this.loadImage(this.src);
    }
  },
  methods: {
    showMenu(e) {
      e.preventDefault()
      this.x = e.clientX
      this.y = e.clientY
      this.style = {
        left: this.x + 'px',
        top: this.y + 'px'
      }
      this.$emit('update:show', true)
    },
    hideMenu(e) {
      this.$emit('update:show', false)
    }
  }
}