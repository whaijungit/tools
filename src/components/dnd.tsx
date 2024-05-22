import { Form } from 'antd'
import { useState } from 'react'
import { componentMap } from './map'
import { ComponentItem } from './interface'
import { componentOptions } from '../config'
import { arrayMove } from '@dnd-kit/sortable'


const styles = {
    container: {
        gap: 10,
        width: 500,
        height: 800,
        display: 'flex',
        margin: '0 auto'
    } as React.CSSProperties,
    draggableContainer: {
        flex: 1,
        padding: 8,
        overflow: 'hidden auto',
        border: '1px solid #e8e8e8'
    } as React.CSSProperties,
    draggableItem: {
        padding: 4,
        minHeight: 40,
        cursor: 'move',
        borderRadius: 4,
        marginBottom: 10,
        transition: '500ms',
        backgroundColor: '#fff',
        border: '1px solid #e8e8e8',
    } as React.CSSProperties,
    draggableItemActive: {
        border: '1px solid #0048ff',
        backgroundColor: 'rgba(0,0,0,0.04)'
    } as React.CSSProperties
}

export const Demo: React.FC = () => {
    const [dropItem, setDropItem] = useState<ComponentItem>()
    const [components, setComponents] = useState(componentOptions)
    const [draggableItem, setDraggableItem] = useState<ComponentItem>()
    const [draggableMoveItem, setDraggableMoveItem] = useState<ComponentItem>()
    return (
        <div style={styles.container}>
            <div style={styles.draggableContainer}></div>
            <div style={styles.draggableContainer}>
                <Form>
                    {components.map((config, index) =>
                        <div
                            draggable
                            key={config.id}
                            data-index={index}
                            style={{
                                ...styles.draggableItem,
                                ...(draggableMoveItem && draggableMoveItem.id === config.id ? styles.draggableItemActive : styles.draggableItem)
                            }}
                            onClick={() => {
                                setDraggableItem(config)
                            }}
                            onDragStart={() => {
                                setDraggableItem(config)
                            }}

                            onDrop={e => {
                                e.preventDefault()
                            }}

                            onDragEnter={(e) => {
                                e.preventDefault()
                                setDropItem(config)
                            }}

                            onDragEnd={() => {
                                if (draggableItem && dropItem && draggableItem.id === dropItem.id) {
                                    return
                                }
                                if (draggableItem && dropItem) {
                                    setComponents(prevState => {
                                        const fromIndex = prevState.findIndex(r => r.id === draggableItem.id)
                                        const toIndex = prevState.findIndex(r => r.id === dropItem.id)
                                        return arrayMove(prevState, fromIndex, toIndex)
                                    })
                                }
                                setDropItem(undefined)
                                setDraggableItem(undefined)
                                setDraggableMoveItem(undefined)
                            }}
                            onDragOver={(e) => {
                                e.preventDefault()
                                setDraggableMoveItem(config)
                            }}
                        >
                            {componentMap[config.type](config)}
                        </div>
                    )}
                </Form>

            </div>
        </div>
    )
}