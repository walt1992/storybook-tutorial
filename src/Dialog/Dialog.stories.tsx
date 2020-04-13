import React from 'react';
import Dialog from './Dialog';
import {text, boolean, withKnobs} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';
export default {
    title: 'components|Dialog',
    component: Dialog,
    parameters: {
        docs: {
            inlineStories: false,
        }
    },
    decorators: [
        withKnobs
    ]
}

export const dialog = () => {

    const cancelable = boolean('cancelable', true);
    const hideButtons = boolean('hideButtons', false);
    const visible = boolean('visible', true);
    const cancelText = text('cancelText', 'Cancel');
    const confirmText = text('confirmText', 'Confirm');
    const children = text('children', '이것은 다이얼로그 입니다');
    const title = text('title', 'Modal Title');
    return (
        <Dialog
            cancelText={cancelText}
            confirmText={confirmText}
            hideButtons={hideButtons}
            title={title}
            visible={visible}
            cancelable={cancelable}
            children={children}
            onCancel={action('onCancel')}
            onConfirm={action('onConfirm')}
        />
    )
}

dialog.story = {
    name : 'Default'
}

