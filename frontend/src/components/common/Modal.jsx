import React from "react";
import '@components/common/Modal.scss'

function Modal(props){
  const { open, close,header } = props;
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <h1 className='titleText'>모달 헤더</h1>
          </header>

         
          <main>
            <h1>{header}</h1>
          </main>
          <footer>
            <button type="button" className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
      </div>
  )
}

export default Modal;