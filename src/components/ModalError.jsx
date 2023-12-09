import React from 'react'

const ModalError = ({active, setActive, errorMsg}) => {
  return (
    <div className={active ? 'modal _active' : 'modal'}>
        <div className="modal__content">
            <img src="https://cdn.staticcrate.com/stock-hd/effects/footagecrate-red-error-icon-prev-full.png" alt="" />
            <p className='title'>Ooops!</p>
            <p className='subtitle'>{errorMsg}</p>
            <button onClick={() => setActive(false)}>
                Try Again!
            </button>
        </div>
    </div>
  )
}

export default ModalError