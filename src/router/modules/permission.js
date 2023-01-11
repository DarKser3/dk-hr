import layout from '@/layout'
export default {
  path: '/permission',
  name: 'permission ',
  component: layout,
  children: [{
    path: '',
    componet: () => import('@/views/permission'),
    meta: { title: '审权限' }
  }]
}
