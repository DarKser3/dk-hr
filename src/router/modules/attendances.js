import layout from '@/layout'
export default {
  path: '/attendances',
  name: 'attendances',
  component: layout,
  children: [{
    path: '',
    componet: () => import('@/views/attendances'),
    meta: { title: '考勤' }
  }]
}
