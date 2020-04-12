declare module '*.mdx';
declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGAElement>>;
    const src: string;
    export default src;
}