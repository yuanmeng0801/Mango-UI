// 预置的图标，如果要新增，直接在这里增加
const icons: { [key: string]: string } = {
  add:
    '<svg viewBox="0 0 1024 1024"><path d="M544 213.333333v266.666667H810.666667v64H544V810.666667h-64V544H213.333333v-64h266.666667V213.333333z" /></svg>',
  close:
    '<svg viewBox="0 0 1045 1024"><path d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z" /></svg>',
  down:
    '<svg viewBox="0 0 1024 1024"><path d="M500.8 604.779L267.307 371.392l-45.227 45.27 278.741 278.613L779.307 416.66l-45.248-45.248z" /></svg>',
  ellipsis:
    '<svg viewBox="0 0 1024 1024"><path d="M269.333333 448a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773334 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z m242.773333 0a56 56 0 1 1 0 112 56 56 0 0 1 0-112z" /></svg>',
  left:
    '<svg viewBox="0 0 1024 1024"><path d="M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z" /></svg>',
  minus:
    '<svg viewBox="0 0 1024 1024"><path d="M810.666667 480v64H213.333333v-64z" /></svg>',
  right:
    '<svg viewBox="0 0 1024 1024"><path d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z" /></svg>',
  search:
    '<svg viewBox="0 0 1024 1024"><path d="M469.333 192c153.174 0 277.334 124.16 277.334 277.333 0 68.054-24.534 130.411-65.216 178.688L846.336 818.24l-48.341 49.877L630.4 695.125a276.053 276.053 0 0 1-161.067 51.542C316.16 746.667 192 622.507 192 469.333S316.16 192 469.333 192z m0 64C351.51 256 256 351.51 256 469.333s95.51 213.334 213.333 213.334 213.334-95.51 213.334-213.334S587.157 256 469.333 256z" /></svg>',
  seleted:
    '<svg viewBox="0 0 1024 1024"><path d="M235.946667 472.938667l-45.226667 45.312 210.090667 209.514666 432.362666-427.690666-45.013333-45.482667-387.157333 382.976z" /></svg>',
  up:
    '<svg viewBox="0 0 1024 1024"><path d="M500.8 461.909333L267.306667 695.296l-45.226667-45.269333 278.741333-278.613334L779.306667 650.026667l-45.248 45.226666z" /></svg>',
}
// 将svg标签替换成symbol标签
const createSvgSprite = () => {
  const symbols = Object.keys(icons)
    .map(item => {
      return `<symbol id=${item}${icons[item].slice(4, -4)}symbol>`
    })
    .join('')
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="__MANGO_UI_SVG_SPRITE__"
    style="display:none;overflow:hidden;width:0;height:0"
  >
    <defs>
      ${symbols}
    </defs>
  </svg>
  `
}
// 将svg添加到body标签后
const renderSprite = () => {
  if (!document) {
    return
  }
  const isSpriteExisting = document.getElementById('__MANGO_UI_SVG_SPRITE__')
  if (!isSpriteExisting) {
    // insertAdjacentHTML方法将字符串解析为dom，并插入到指定位置
    document.body.insertAdjacentHTML('afterbegin', createSvgSprite())
  }
}
export default renderSprite
