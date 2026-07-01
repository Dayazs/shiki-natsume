<template>
  <section class="hero">
    <!-- 背景层 -->
    <div class="hero-bg"></div>

    <!-- 内容 -->
    <div class="hero-content">
      <p class="subtitle">Welcome To</p>

      <h1 class="title">星光咖啡馆</h1>

      <p class="desc">
        记录成长 · 收藏回忆 · 分享生活
      </p>

      <button class="btn" @click="handleEnter">
        开始探索
      </button>
    </div>

    <!-- 滚动提示 -->
    <div class="scroll">
      <span>SCROLL</span>
      <div class="line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 点击按钮（后面可以接路由滚动）
const handleEnter = () => {
  const bar = document.getElementById('bar')
  if (bar) {
    bar.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 咖啡馆氛围背景（先用渐变） */
  background: radial-gradient(
      circle at top,
      rgba(214, 182, 125, 0.18),
      transparent 40%
    ),
    linear-gradient(180deg, #141416, #0f1013);
}

/* 背景暗层 */
.hero-bg {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.subtitle {
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 6px;
  font-size: 14px;
  margin-bottom: 10px;
}

.title {
  font-size: clamp(3rem, 8vw, 6rem);
  color: #f6e7c8;
  margin: 0;
  text-shadow: 0 0 20px rgba(246, 231, 200, 0.25);
}

.desc {
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
}

.btn {
  margin-top: 40px;
  padding: 12px 32px;

  border: 1px solid #d6b67d;
  background: transparent;
  color: #f6e7c8;

  cursor: pointer;
  transition: 0.3s;
  font-family: inherit;
}

.btn:hover {
  background: rgba(214, 182, 125, 0.15);
  transform: translateY(-2px);
}

/* 滚动提示 */
.scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

.line {
  width: 1px;
  height: 40px;
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.4);
}
</style>