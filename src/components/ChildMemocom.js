import React, { memo } from 'react'
import MemoComponents from './MemoComponents'

function ChildMemocom(props) {
    console.log("ChildMemo-Re-render")
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  )
}

export default memo(ChildMemocom)
