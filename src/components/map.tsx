import { InputSliderNumber } from './Input'
import { ComponentItem } from './interface'
import { Cascader, Checkbox, Collapse, ColorPicker, Form, FormItemProps, Input, InputNumber, Select, Switch } from 'antd'

export const componentMap = {
    text: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Input {...config.componentProps} />
        </Form.Item>
    ),
    cascader: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Cascader {...config.componentProps} />
        </Form.Item>
    ),
    textarea: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Input.TextArea {...config.componentProps} />
        </Form.Item>
    ),
    switch: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Switch {...config.componentProps} />
        </Form.Item>
    ),
    checkbox: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Checkbox.Group {...config.componentProps} />
        </Form.Item>
    ),
    select: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Select {...config.componentProps} />
        </Form.Item>
    ),
    color: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <ColorPicker {...config.componentProps} />
        </Form.Item>
    ),
    collapse: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Collapse {...config.componentProps} />
        </Form.Item>
    ),
    inputNumber: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <InputNumber />
        </Form.Item>
    ),
    selects: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <Select {...config.componentProps} mode='multiple' />
        </Form.Item>
    ),
    inputNumberSlider: (config: ComponentItem) => (
        <Form.Item {...config.formItemProps}>
            <InputSliderNumber {...config.componentProps} />
        </Form.Item>
    ),
}

export const requiredRule: FormItemProps['rules'] = [
    {
        required: true,
    }
]

export type ComponentType = keyof typeof componentMap