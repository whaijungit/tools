import { ConfigProvider, } from 'antd'
import { Demo } from './components/dnd'

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          sizeLG: 16,
          borderRadius: 4,
        }
      }}
      componentSize='large'
    >

      <Demo />
    </ConfigProvider>
  )
}

export default App
