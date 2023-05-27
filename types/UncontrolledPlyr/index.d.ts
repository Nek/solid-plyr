import { JSX } from 'solid-js';
import Plyr from 'plyr';
export type HTMLPlyrVideoElement = HTMLVideoElement & {
    plyr?: Plyr;
};
export interface UncontrolledPlyrProps extends JSX.VideoHTMLAttributes<HTMLPlyrVideoElement> {
    fallback?: JSX.Element;
    isLoading?: boolean;
}
export default function UncontrolledPlyr(props: UncontrolledPlyrProps): JSX.Element;
