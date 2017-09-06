function dropdown () {
  document.getElementById('dropdown').classList.toggle('show')
}

function filterFunction () {
  var input, filter, ul, li, a, i
  input = document.getElementById('myInput')
  filter = input.value.toUpperCase()
  div = document.getElementById('dropdown')
  a = div.getElementsByTagName('a')
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = ''
    } else {
      a[i].style.display = 'none'
    }
  }
}
