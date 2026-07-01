<template>
  <section class="bar" id="bar">
    <div class="bar-container">

      <!-- 左侧人物区 -->
      <div class="avatar-box">
        <div class="avatar"></div>
        <p class="name">店长 · 千咲</p>
        <p class="role">前端开发者</p>
      </div>

      <!-- 右侧对话区 -->
      <div class="dialog-box">

        <p class="tag">BAR / 吧台</p>

        <h2 class="title">欢迎来到吧台</h2>

        <p class="dialog">
          “这里是星光咖啡馆的中心区域。”<br />
          “如果你愿意，可以在这里了解我。”
        </p>

        <div class="info">
          <p>我目前专注于前端开发与全栈学习：</p>

          <div class="skills">
            <span>Vue3</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>NestJS</span>
            <span>Prisma</span>
          </div>
        </div>

        <p class="footer">
          正在构建属于自己的数字咖啡馆 ☕
        </p>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// 后面可以加：进入动画 / 打字机效果 / 滚动触发
</script>

<style scoped lang="scss">
.bar {
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: radial-gradient(
      circle at top,
      rgba(214, 182, 125, 0.12),
      transparent 45%
    ),
    linear-gradient(180deg, #0f1013, #141416);
}

.bar-container {
  width: min(1200px, 90%);
  display: flex;
  gap: 60px;
  align-items: center;
}

/* 左侧人物 */
.avatar-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 220px;
  height: 300px;

  border-radius: 12px;

  background: linear-gradient(
    135deg,
    rgba(214, 182, 125, 0.3),
    rgba(255, 255, 255, 0.05)
  );

  border: 1px solid rgba(214, 182, 125, 0.4);

  box-shadow: 0 0 30px rgba(214, 182, 125, 0.15);
}

.name {
  margin-top: 20px;
  color: #f6e7c8;
  font-size: 18px;
  letter-spacing: 2px;
}

.role {
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.6);
}

/* 右侧对话 */
.dialog-box {
  flex: 1.5;
  padding: 20px;
}

.tag {
  font-size: 12px;
  letter-spacing: 4px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 10px;
}

.title {
  font-size: 2rem;
  color: #f6e7c8;
  margin-bottom: 20px;
}

.dialog {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 30px;
}

.info {
  margin-bottom: 30px;
}

.info p {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 12px;
}

/* 技术标签 */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skills span {
  padding: 6px 12px;

  border: 1px solid rgba(214, 182, 125, 0.4);
  border-radius: 20px;

  color: #f6e7c8;
  font-size: 13px;

  background: rgba(214, 182, 125, 0.08);
  transition: 0.3s;
}

.skills span:hover {
  background: rgba(214, 182, 125, 0.2);
  transform: translateY(-2px);
}

.footer {
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
}

/* 响应式 */
@media (max-width: 768px) {
  .bar-container {
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    width: 180px;
    height: 240px;
  }
}
</style>