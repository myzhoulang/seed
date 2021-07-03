/// <reference types="react-scripts" />

declare module "*.less" {
  const less: any
  export default less
}

declare module "*.module.less" {
  const classes: { [key: string]: string }
  export default classes
}
