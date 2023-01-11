import layout from '@/layout'
export default {
  path: '/employees',
  name: 'employees ',
  component: layout,
  children: [{
    path: '',
    componet: () => import('@/views/employees'),
    meta: { title: '员工管理' }
  }]
}
