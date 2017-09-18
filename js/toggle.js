function toggle () {
    // get the div
  var verbose = document.getElementById('verbose-box')
  var tldr = document.getElementById('tldr-box')

    // get the current value of the div's display property
  var verboseDisplay = verbose.style.display
  var tldrDisplay = tldr.style.display

    // also get the toggle, so we can change what it does
  var toggleButton = document.getElementById('toggleButton')

    // now toggle the div, depending on current state
  if (verboseDisplay == 'block') {
      // div is visible. hide it
    verbose.style.display = 'none'
    tldr.style.display = 'block'
  } else {
      // div is hidden. show it
    verbose.style.display = 'block'
    tldr.style.display = 'none'
  }

}
