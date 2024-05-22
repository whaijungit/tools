import { FormItemProps } from 'antd'
import { componentMap } from './map'


export interface ComponentItem {
    id: string
    formItemProps: FormItemProps
    type: keyof typeof componentMap
    componentProps: Record<string, any>
}