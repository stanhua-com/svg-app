import HeaderLayout from '@/components/layout/header.vue'
import FooterLayout from '@/components/layout/footer.vue'
import ContextMenu from '@/components/common/contextMenu/index.vue'

export default {
  name: 'App',
  data() {
    return {
      contextMenuTarget: document.body,
      contextMenuVisible: false,
    }
  },
  computed: {

  },
  components: {
    HeaderLayout,
    FooterLayout,
    ContextMenu
  },
  mounted() {
  },
  methods: {
    // 返回
    onBack() {
      this.$router.go(-1)
    },
    // 重新刷新
    onReload() {
      location.reload()
    }
  }
}