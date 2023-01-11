import layout from '@/layout'
export default {
  path: '/setting',
  name: 'setting ',
  component: layout,
  children: [{
    path: '',
    componet: () => import('@/views/setting'),
    meta: { title: '设置' }
  }]
}
