import { Form } from 'antd'
import { ComponentItem } from './interface'
import { componentMap } from './map'
import React from 'react'

export const renderFormItem = (items: ComponentItem[]) => {
    const renderItem = () => {
        let nodes: React.ReactNode
        try {
            nodes = items.map(item => (
                <div className='form-item'>
                    {componentMap[item.type](item)}
                </div>
            ))
        } catch (error) {

        } finally {
            return nodes
        }
    }
    return (
        <>
            <Form>
                {renderItem()}
            </Form>
        </>
    )
}