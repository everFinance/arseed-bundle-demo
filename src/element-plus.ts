import {
  ElIcon,
  ElSwitch,
  ElMessage,
  ElSkeleton,
  ElOption,
  ElSelect,
  ElUpload,
  ElSkeletonItem
} from 'element-plus'

const components = [
  ElIcon,
  ElOption,
  ElUpload,
  ElSelect,
  ElSwitch,
  ElMessage,
  ElSkeleton,
  ElSkeletonItem
]

const plugins = [
  ElMessage
]

export const importElementPlus = (app: any): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
