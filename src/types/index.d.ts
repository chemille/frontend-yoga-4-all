// declare module '*.png';
// declare module '*.jpg';
declare module 'styled-components';

declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}