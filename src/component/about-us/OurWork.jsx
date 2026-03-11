import React from 'react'
import { ICON_DATA_LIST, TAG_DATA_LIST } from '../../utlis/helper'
import Icons from '../common/Icons'

const OurWork = () => {
  return (
    <div className='min-h-screen bg-green-200'>
        <p className='text-ocean-core'>title</p>
        {ICON_DATA_LIST.map((obj,i) => (
            <div key={i}>
<Icons icon={obj}/>
            </div>
        ))}
        {TAG_DATA_LIST.map((tag,idx) => (
            <div key={idx}>
<Icons icon={tag.icon}/>

            </div>
        ))}
    </div>
  )
}

export default OurWork