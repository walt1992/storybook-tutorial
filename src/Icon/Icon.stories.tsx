/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import Icon, {iconTypes} from './Icon';

export default {
    component: Icon,
    title: 'components|Icon'
}

export const icon = () => <Icon icon ='heart'/>;
icon.story = {
    name: 'Default'
}


export const customSize = () => <Icon icon='heart' size ='4rem'></Icon>
export const customColor = () => <Icon icon='heart' color='red'></Icon>
export const customizedWidthStyle = () => (
    <Icon icon='heart' css={{color:'red', width:'4rem'}}></Icon>
)

export const listOfIcons = () => (
    <ul css = {iconListStyle}>
        {
            iconTypes.map( type => (
                <li key={type}>
                    <Icon icon={type}/>
                    {type}
                </li>
            ))
        }
    </ul>
)

const iconListStyle = css`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
        box-sizing: border-box;
        width: 25%;
        padding: 1rem;
        display: flex;
        align-items: center;
        svg {
            margin-right: 1rem;
        }
    }
}`