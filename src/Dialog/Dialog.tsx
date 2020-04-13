/** @jsx jsx */
import { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import {useTransition, animated} from 'react-spring';

export type DialogProps = {
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

const Dialog = ({
    children,
    title,
    cancelText,
    cancelable,
    confirmText,
    onCancel,
    onConfirm,
    visible,
    hideButtons
}: DialogProps) => {

    const fadeTranstion = useTransition(visible, null, {
        from : {opacity: 0},
        enter : {opacity: 1},
        leave : {opacity: 0},
    })

    const slideUpTransition = useTransition(visible, null, {
        from: {
          transform: `translateY(200px) scale(0.8)`,
          opacity: 0
        },
        enter: {
          transform: `translateY(0px) scale(1)`,
          opacity: 1
        },
        leave: {
          transform: `translateY(200px) scale(0.8)`,
          opacity: 0
        }
    });

    return (
        <Fragment>
            {fadeTranstion.map(({item, key, props}) => 
                item? (
                    <animated.div
                        css = {[fullscreen, darkLayer]}
                        key={key}
                        style={props}
                    ></animated.div>
                ) : null
            )}

            {slideUpTransition.map(({ item, key, props }) =>
                item ? (
                    <animated.div
                        css={[fullscreen, whiteBoxWrapper]}
                        style={props}
                        key={key}
                    >
                        <div css={[fullscreen, darkLayer]}></div>
                        <div css={[fullscreen, whiteBoxWrapper]}>
                            <div css={whiteBox}>
                            <h3>{title}</h3>
                            { typeof children === 'string' ? <p>{children}</p> : children }
                            {
                                !hideButtons &&
                                <ButtonGroup css={{ marginTop: '3rem' }} rightAlign>
                                    {cancelable && <Button theme="tertiary" onClick={onCancel}>{cancelText}</Button>}
                                    <Button onClick={onConfirm}>{confirmText}</Button>
                                </ButtonGroup>
                            }
                            </div>
                        </div>
                    </animated.div>
                ) : null
            )}
        </Fragment>
    );
    };

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const whiteBoxWrapper = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const whiteBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;

export default Dialog;