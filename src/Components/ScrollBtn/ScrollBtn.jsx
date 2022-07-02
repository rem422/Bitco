import { useState, useEffect } from 'react'
import { HiChevronUp } from 'react-icons/hi'
import './scrollBtn.css'

const ScrollBtn = () => {
const [show, setShow] = useState(false)

// Shows the button when the window is greater than 30px
const showBtn = () => {
    if (window.scrollY > 30) {
        setShow(true)
    } else {
        setShow(false)
    }
}
// Goes back to top when the btn is clicked
useEffect(() => {
    showBtn()
    window.addEventListener('scroll', showBtn)
},[])

const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
}

  return (
    <div>
        <HiChevronUp className={show ?'scroll-up-btn show' : "scroll-up-btn"} onClick={() => scrollToTop()}/>
    </div>
  )
}

export default ScrollBtn