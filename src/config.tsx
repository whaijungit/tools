import { ComponentItem } from './components/interface';
import { requiredRule } from './components/map';

export const componentOptions: ComponentItem[] = [
    {
        id: '1',
        type: 'text',
        formItemProps: {
            name: 'text',
            rules: requiredRule,
        },
        componentProps: {},
    },
    {
        id: '2',
        type: 'textarea',
        formItemProps: {
            name: 'textarea',
            rules: requiredRule,
        },
        componentProps: {},
    },
    {
        id: '3',
        type: 'select',
        formItemProps: {
            name: 'select',
            rules: requiredRule,
        },
        componentProps: {
            options: [
                {
                    label: 'option-1',
                    value: 'option-1'
                },
                {
                    label: 'option-2',
                    value: 'option-2'
                }
            ]
        },
    },
    {
        id: '4',
        type: 'selects',
        formItemProps: {
            name: 'selects',
            rules: requiredRule,
        },
        componentProps: {
            options: [
                {
                    label: 'option-1',
                    value: 'option-1'
                },
                {
                    label: 'option-2',
                    value: 'option-2'
                }
            ]
        },
    },
    {
        id: '5',
        type: 'collapse',
        formItemProps: {
            name: 'collapse',
            rules: requiredRule,
        },
        componentProps: {
            items: [
                {
                    key: 'option-1',
                    label: 'option-1',
                },
                {
                    label: 'option-2',
                    key: 'option-2',
                }
            ]
        },
    },
    {
        id: '6',
        type: 'collapse',
        formItemProps: {
            rules: requiredRule,
        },
        componentProps: {
            items: [
                {
                    value: 'option-1',
                    label: 'option-1',
                },
                {
                    label: 'option-2',
                    value: 'option-2',
                }
            ]
        },
    },
    {
        id: '7',
        type: 'inputNumber',
        formItemProps: {
            initialValue: 40,
            name: 'inputNumber',
            rules: requiredRule,
        },
        componentProps: {
            max: 100,
            min: 10,
            step: 10,
        },
    },
    {
        id: '8',
        type: 'inputNumberSlider',
        formItemProps: {
            initialValue: 80,
            rules: requiredRule,
            name: 'inputNumberSlider',
        },
        componentProps: {
            max: 100,
            min: 10,
            step: 10,
        },
    },
    {
        id: '9',
        type: 'cascader',
        formItemProps: {
            name: 'cascader',
            rules: requiredRule,
            initialValue: ['长沙市', '芙蓉区'],
        },
        componentProps: {
            options: [
                {
                    label: "长沙市",
                    value: "长沙市",
                    children: [
                        {
                            label: "芙蓉区",
                            value: "芙蓉区",
                        },
                        {
                            label: "天心区",
                            value: "天心区",
                        },
                        {
                            label: "雨花区",
                            value: "雨花区",
                        },
                        {
                            label: "开福区",
                            value: "开福区",
                        },
                        {
                            label: "岳麓区",
                            value: "岳麓区",
                        },
                        {
                            label: "望城区",
                            value: "望城区",
                        }
                    ]
                },

            ]
        },
    },
]
