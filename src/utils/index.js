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

function changeCharter(str, oldSymbol, newSymbol) {
  if (!str) return
  const reg = new RegExp(`(\\d{4})${oldSymbol}(\\d{2})${oldSymbol}(\\d{2})`, 'g')
  return str.replace(reg, `$1${newSymbol}$2${newSymbol}$3`)
}


/*
设置localStorage
*/
export function setItem(a,b) {
	if(window.localStorage){
		window.localStorage.setItem(a,b);
  }
  
  let c=new Date;
  c.setTime(c.getTime()+31536e6),
  document.cookie=a+"="+escape(b)+";expires="+c.toGMTString()
};

/*
获取localStorage
*/
export function getItem(a) {
	if(window.localStorage){
		return window.localStorage.getItem(a);
	}else{
		var b=document.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)"));
		return null!=b?unescape(b[2]):null
	}
};

/*
删除localStorage
*/
export function removeItem(a) {
	var b, c;
	window.localStorage ? window.localStorage.removeItem("tw_" + a) : (b = new Date, b.setTime(b.getTime() - 1), c = H.getItem(a), null != c && (document.cookie = "tw_" + a + "=" + c + ";expires=" + b.toGMTString()))
};

export default {
  isMobile,
  getURLVar,
  changeCharter
};