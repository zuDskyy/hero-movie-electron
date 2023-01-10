import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center space-x-2 p-20">
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-800"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-800"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-800"></div>
  </div>
  )
}

export default Loading