'use strict'
var container = document.getElementById('J_IdleHeader')
var html = `<div class='idle-search'>
<form method='get' action='//s.2.taobao.com/list/list.htm' name='search' target='_top'>
  <input class='input-search' id='J_HeaderSearchQuery' name='q' type='text' value='' placeholder='搜闲鱼' />
  <input type='hidden' name='search_type' value='item' autocomplete='off' />
  <input type='hidden' name='app' value='shopsearch' autocomplete='off' />
  <button class='btn-search' type='submit'>
    <i class='iconfont'>&#xe602;</i>
    <span class='search-img' />
  </button>
</form>
</div>`

function html2Element (html) {
  var template = document.createElement('template')
  template.innerHTML = html.trim()
  return template.content.firstChild
}
container.appendChild(html2Element(html))
