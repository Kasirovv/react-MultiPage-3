import React from 'react'

function Btn(props) {
  return (
        <div>
            <button className='px-[15px] h-[5vh] bg-[#FEAD04] text-[15px] font-[400] text-white'>
                {props.title}
            </button>
        </div>
  )
}

export default Btn
