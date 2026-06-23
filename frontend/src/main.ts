import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入全局样式
import '@/css/global.scss'

// 实现根据屏幕动态更改根字体大小
function setRem() {
  const designWidth = 1920
  const baseSize = 16
  const minWidth = 1024
  let width = Math.max(minWidth, window.innerWidth)
  document.documentElement.style.fontSize =
    (width / designWidth) * baseSize + 'px'
}
setRem()
window.addEventListener('resize', setRem)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
