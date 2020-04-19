/// <reference types="react" />
export declare type DialogProps = {
    /** 다이얼로그 안에 들어갈 콘텐츠입니다. DOM 을 사용해 커스터마이징 가능하며 string을 통해 기본 스타일의 다이얼로그를 렌더링할 수 있습니다. */
    children?: React.ReactNode | string;
    /** 다이얼로그의 제목입니다 */
    title: string;
    cancelable?: boolean;
    cancelText: string;
    confirmText: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    visible: boolean;
    hideButtons: boolean;
};
declare const Dialog: ({ children, title, cancelText, cancelable, confirmText, onCancel, onConfirm, visible, hideButtons }: DialogProps) => JSX.Element;
export default Dialog;
