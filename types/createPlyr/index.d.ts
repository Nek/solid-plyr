import { Accessor, Setter } from 'solid-js';
import Plyr from 'plyr';
import { HTMLPlyrVideoElement } from '../UncontrolledPlyr';
export interface CreatePlyrProps {
    source: Plyr.SourceInfo;
    options?: Plyr.Options;
}
type PlyrResult = HTMLPlyrVideoElement | undefined;
export type CreatePlyrResult = [
    plyr: Accessor<PlyrResult>,
    setPlyr: Setter<PlyrResult>
];
export default function createPlyr(props: CreatePlyrProps): CreatePlyrResult;
export {};
