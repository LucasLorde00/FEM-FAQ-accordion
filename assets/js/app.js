const items = [
  { btn: 'dom-img1', text: 'dom-text1' },
  { btn: 'dom-img2', text: 'dom-text2' },
  { btn: 'dom-img3', text: 'dom-text3' },
  { btn: 'dom-img4', text: 'dom-text4' }
]

items.forEach(item => {
  const btn = document.getElementById(item.btn)
  const text = document.getElementById(item.text)

  btn.addEventListener('click', () => {
    items.forEach(other => {
      const otherText = document.getElementById(other.text)
      const otherBtn = document.getElementById(other.btn)

      if (otherText !== text) {
        otherText.classList.remove('active')
        otherBtn.src = 'assets/images/icon-plus.svg'
      }
    })

    const isActive = text.classList.contains('active')
    text.classList.toggle('active')
    btn.src = isActive
      ? 'assets/images/icon-plus.svg'
      : 'assets/images/icon-minus.svg'
  })
})
