import layout from '@/layout'
export default {
  path: '/departments',
  name: 'departments ',
  component: layout,
  children: [{
    path: '',
    componet: () => import('@/views/departments'),
    meta: { title: '组织架构' }
  }]
}
