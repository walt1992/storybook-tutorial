/** @jsx jsx */
import {css, jsx} from '@emotion/core';

type ButtonGroupProps = {
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
}

const ButtonGroup =({
    direction,
    rightAlign,
    children,
    gap,
    className
}: ButtonGroupProps) => {
    return (
        <div
            css={[{
                display: 'flex',
                flexDirection: direction
            },
            gapStyle(direction, gap),
            rightAlign && rightAlignStyle]}
            className={className}
        >
            {children}
        </div>
    )
}

ButtonGroup.defaultProps = {
    direction: 'row',
    gap: '0.5rem'
};

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
    const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
    return css({
        'button + button': {
            [marginType] : gap
        }
    });
}

const rightAlignStyle = css`
    justify-content: flex-end
`;

export default ButtonGroup;