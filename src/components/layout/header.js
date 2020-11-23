export default {
  name: 'HeaderLayout',
  data() {
    return {
      menuList: [
        { name: 'SnapSvg', link: '/snap' }
      ]
    }
  },
  computed: {
    activePath() {
      return '/' + this.$route.path.split('/')[1]
    }
  },
  methods: {
    onNavItem(i) {
      const item = this.menuList[i]
      if (item.link === this.$route.path) return
      this.$router.push(item.link)
    },
  }
}
