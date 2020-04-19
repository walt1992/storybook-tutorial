/// <reference types="react" />
declare type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme?: 'primary' | 'secondary' | 'tertiary';
    /** 버튼의 크기를 설정합니다 */
    size?: 'small' | 'medium' | 'large';
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 버튼의 너비를 임의로 설정합니다. */
    width?: string | number;
    /** 아이콘만 표시되는 버튼임을 의미합니다 */
    iconOnly?: boolean;
};
declare function Button({ children, theme, size, disabled, iconOnly, width, onClick }: ButtonProps): JSX.Element;
export default Button;
