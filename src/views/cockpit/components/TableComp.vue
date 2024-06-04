<template>
  <!-- 自研表格 UI 组件 -->
  <div class="data-dashboard-table-wrapper">
    <div
      class="data-dashboard-table-header-wrapper"
      :class="{ 'scrollbar-space': isScrolled }"
      ref="headerWrapper"
    >
      <!-- 表头 -->
      <table class="data-dashboard-table-header" v-if="bodyShow">
        <colgroup>
          <col
            v-for="(item, index) in columns"
            :key="index"
            :width="item.width ? item.width : item.type == 'expand' ? 50 : ''"
          />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="(item, index) in columns"
              :key="index"
              :title="item.title"
              :style="{ textAlign: item.align }"
            >
              {{ item.title }}
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <!-- 列宽 -->
    <div class="data-dashboard-table-body-wrapper" ref="bodyWrapper">
      <table class="data-dashboard-table-body" v-if="bodyShow">
        <colgroup>
          <col
            v-for="(item, index) in columns"
            :key="index"
            :width="item.width ? item.width : item.type == 'expand' ? 50 : ''"
          />
        </colgroup>
        <tbody>
          <tr
            v-for="(dataItem, index1) in nDataSource"
            :key="index1"
            @click="rowClick(dataItem, index1)"
          >
            <td
              v-for="(columnItem, index2) in columns"
              :key="index2"
              :title="getTitle(columnItem, index1, dataItem)"
              :style="{ textAlign: columnItem.align }"
            >
              <div
                class="expand-icon"
                v-if="columnItem.type === 'expand'"
                @click.stop="toggleExpand($event, dataItem)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                  />
                </svg>
              </div>
              <!-- 自定义渲染数据函数 -->
              <span
                v-else-if="
                  columnItem.customRender && typeOf(columnItem.customRender) === 'Function'
                "
                >{{
                  columnItem.customRender(dataItem[columnItem.dataIndex], index1, dataItem) || '-'
                }}</span
              >
              <!-- 插槽数据 -->
              <slot
                v-else-if="columnItem.customRender && typeOf(columnItem.customRender) === 'String'"
                :name="columnItem.customRender"
                v-bind="{
                  text: dataItem[columnItem.dataIndex],
                  record: dataItem
                }"
              ></slot>

              <!-- 渲染数据 -->
              <span v-else>{{ dataItem[columnItem.dataIndex] || '-' }}</span>
            </td>
          </tr>
          <div class="empty" v-if="nDataSource.length === 0">暂无数据</div>
          <tr ref="expandSlot" class="expand-slot" v-if="hasExpand" v-show="showExpand">
            <td :colspan="columns.length">
              <slot
                name="expand"
                v-bind="{
                  record: expandRecord
                }"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 表头参数
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    // 表数据
    dataSource: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showExpand: false,
      bodyShow: true,
      nDataSource: [],
      prevExpandEvent: null,
      expandRecord: {},
      isScrolled: false
    }
  },
  watch: {
    dataSource: {
      handler(data) {
        this.bodyShow = false
        this.nDataSource = data
        this.$nextTick(() => {
          this.bodyShow = true
          this.$nextTick(() => {
            this.isScrolled = this.hasScrolled()
          })
        })
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.$refs.bodyWrapper.addEventListener('scroll', (e) => {
      this.$refs.headerWrapper.scrollLeft = e.target.scrollLeft
    })
  },
  computed: {
    // 表格是否可展开
    hasExpand() {
      return this.columns.some((obj) => obj.type === 'expand')
    }
  },
  methods: {
    hasScrolled() {
      const dom = this.$refs.bodyWrapper
      return dom.scrollHeight > dom.clientHeight
    },
    // 计算 td title 内容
    getTitle(columnItem, index, dataItem) {
      if (
        columnItem.type === 'expand' ||
        (columnItem.customRender && this.typeOf(columnItem.customRender) === 'String')
      ) {
        return ''
      } else if (columnItem.customRender && this.typeOf(columnItem.customRender) === 'Function') {
        return columnItem.customRender(dataItem[columnItem.dataIndex], index, dataItem)
      } else {
        return dataItem[columnItem.dataIndex]
      }
    },
    // 表格展开切换
    toggleExpand(event, record) {
      this.expandRecord = record
      const targetElement = event.target.parentElement.parentElement
      this.insertAfter(this.$refs.expandSlot, targetElement)
      if (event.target.classList.contains('expand')) {
        event.target.classList.remove('expand')
        this.showExpand = false
        this.prevExpandEvent = null
      } else {
        event.target.classList.add('expand')
        this.showExpand = true

        // 还原上一个图标
        if (this.prevExpandEvent) {
          this.prevExpandEvent.target.classList.remove('expand')
        }

        this.prevExpandEvent = event
      }
    },
    // 行点击
    rowClick(dataItem, index1) {
      this.$emit('rowClick', dataItem, index1)
    },
    typeOf(data) {
      return Object.prototype.toString.call(data).slice(8, -1)
    },
    // 插入 dom
    insertAfter(newElement, targetElement) {
      var parent = targetElement.parentNode
      if (parent.lastChild == targetElement) {
        parent.appendChild(newElement)
      } else {
        parent.insertBefore(newElement, targetElement.nextSibling)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.data-dashboard-table-wrapper {
  width: 100%;
  height: 100%;
  border: 1px solid #274bc1;
  border-radius: 3px;
  background-color: rgba(2, 10, 21, 0.6);
  overflow: hidden;
  .data-dashboard-table-header-wrapper {
    overflow: hidden;
    &.scrollbar-space {
      scrollbar-gutter: stable;
    }
    .data-dashboard-table-header {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      color: #fff;
      thead {
        background: #274bc1;
        tr {
          th {
            height: 36px;
            line-height: 36px;
            padding: 0 8px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: normal;
          }
        }
      }
    }
  }
  .data-dashboard-table-body-wrapper {
    height: calc(100% - 36px);
    overflow: auto;
    .data-dashboard-table-body {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      color: #fff;
      position: relative;
      tbody {
        tr {
          background-color: transparent;
          border-bottom: 1px solid #274bc1;
          &:last-child {
            border-bottom: 0;
          }
          &:hover {
            background-color: rgba(53, 141, 210, 0.2);
          }
          td {
            padding: 8px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
              color: #98c1ff;
              transition: all ease 0.3s;
              &:hover {
                color: #4c93ff;
              }
            }

            .expand-icon {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              user-select: none;
              svg {
                pointer-events: none;
                transition: transform 0.2s ease;
              }
              &.expand {
                svg {
                  transform: rotate(90deg);
                }
              }
            }

            .el-image {
              float: left;
            }
          }
          &.expand-slot {
            background-color: rgba(0, 0, 0, 0.3);
            td {
              padding: 20px;
            }
          }
        }
      }
    }
    .empty {
      color: #ccc;
      width: 100%;
      position: absolute;
      left: 0;
      height: 36px;
      line-height: 36px;
      text-align: center;
    }
  }
}
</style>
