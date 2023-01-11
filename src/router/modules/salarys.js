import layout from '@/layout'
export default {
  path: '/salarys',
  name: 'salarys ',
  component: layout,
  children: [{
    path: '',
    componet: () => import('@/views/salarys'),
    meta: { title: '审权限' }
  }]
}
