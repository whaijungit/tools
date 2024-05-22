import React from 'react'
import { Flex, InputNumber, Slider } from 'antd'

interface FormProps {
    value?: any
    onChange?: (e: any) => void
    [k: string]: any
}

export const InputSliderNumber: React.FC<FormProps & any> = (props) => {
    return (
        <Flex style={{ width: '100%', }} gap={20}>
            <Slider {...props} style={{ flex: 1 }} />
            <InputNumber {...props} style={{ flex: 0.5 }} />
        </Flex>
    )
}