export default {
  // 图表池
  pool: new Map(),

  // 分配图表实例
  alloc(handle, chart) {
    if (!handle) {
      return this.pool
    }
    if (!this.pool.has(handle)) this.pool.set(handle, chart)
    return this.pool.get(handle).chart
  }
}
