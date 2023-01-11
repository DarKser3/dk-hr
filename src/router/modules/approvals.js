import layout from '@/layout'
export default {
  path: '/approvals',
  name: 'approvals ',
  component: layout,
  children: [{
    path: '',
    componet: () => import('@/views/approvals'),
    meta: { title: '审批' }
  }]
}
