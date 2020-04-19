/// <reference types="react" />
import * as icons from './svg';
declare type IconType = keyof typeof icons;
export declare const iconTypes: IconType[];
export declare type IconProps = {
    /**사용할 아이콘 타입 */
    icon: IconType;
    /**아이콘 색상 */
    color?: string;
    size?: string | number;
    className?: string;
};
/**
 * 아이콘을 보여주고 싶을 땐 Icon컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg형태로 아이콘을 보여주며, props또는 스타일을 사용하여 색상과 크기를 변경할 수 있습니다.
 * 스타일로 모양새를 설정할 때내는 color를, 크기를 조정하고 싶을 때는 width를 사요하세요.
 */
declare const Icon: ({ icon, color, size, className }: IconProps) => JSX.Element;
export default Icon;
