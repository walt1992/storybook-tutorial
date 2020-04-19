/// <reference types="react" />
declare type ButtonGroupProps = {
    /** 버튼을 보여줄 방향 */
    direction: 'row' | 'column';
    /** 버튼을 우측에 보여줌 */
    rightAlign?: boolean;
    /** 버튼과 버튼사이의 간격 */
    gap: number | string;
    /** 버튼들 */
    children: React.ReactNode;
    /** 스타일 커스터마이징 */
    className?: string;
};
declare const ButtonGroup: {
    ({ direction, rightAlign, children, gap, className }: ButtonGroupProps): JSX.Element;
    defaultProps: {
        direction: string;
        gap: string;
    };
};
export default ButtonGroup;
