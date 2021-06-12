import { Input } from 'antd'

export default function LoginForm(props: any) {
  return (
    <div>
      <Input style={{ marginBottom: '5px' }} placeholder="Username" type="text" />
      <Input style={{ marginBottom: '5px' }} placeholder="Password" type="password" />
    </div>
  )
}
