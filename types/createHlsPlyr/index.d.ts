import Hls from 'hls.js';
import { CreatePlyrProps, CreatePlyrResult } from '../createPlyr';
declare global {
    interface Window {
        hls: Hls;
    }
}
export default function createHlsPlyr(props: CreatePlyrProps): CreatePlyrResult;
