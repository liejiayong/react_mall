function isMobile() {
  const checkList = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  const result = checkList.filter((e) => {
    return navigator.userAgent.indexOf(e) !== -1
  })
  return result.length !== 0
}

function getURLVar(search, a) {
  var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"),
    c = search.substr(1).match(b);
  return null != c ? unescape(c[2]) : null
}


export default {
  isMobile,
  getURLVar
};