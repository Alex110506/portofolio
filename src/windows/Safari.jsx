import WindowControls from '#components/WindowControls'
import { blogPosts } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
  return (
    // 1. Change Root: Wrap everything in a full-height flex container
    // This ensures the layout fits strictly inside the WindowWrapper
    <div className="h-full flex flex-col w-full bg-white rounded-lg overflow-hidden">
      
      {/* 2. Header: Add 'flex-shrink-0' to prevent it from squishing */}
      <div id='window-header' className='flex-shrink-0'> 
        <WindowControls target="safari" />
        <PanelLeft className='ml-10 icon' />

        <div className='flex items-center gap-1 ml-5'>
          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>

        <div className='flex-1 flex-center gap-3'>
          <ShieldHalf className='icon' />
          <div className='search'>
            <Search className='icon' />
            <input
              type="text"
              placeholder='Search or enter website'
              className='felx-1' />
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <Share className='icon'/>
          <Plus className='icon'/>
          <Copy className='icon'/>
        </div>
      </div>

      {/* 3. Content Area: 
          - Remove 'h-140'
          - Add 'flex-1' (fills remaining space)
          - Add 'overflow-y-auto' (enables scrolling here)
          - Add 'min-h-0' (crucial flexbox fix for scrolling) 
      */}
      <div className='blog flex-1 overflow-y-auto min-h-0 bg-white'>
        <h2>My Developer Achivements</h2>
        
        {/* Remove overflow from here, let the parent handle it, 
            or keep it here and remove it from parent. 
            Usually, scrolling the whole '.blog' div feels more natural. */}
        <div className='space-y-8 overflow-y-scroll h-100'> 
          {blogPosts.map(({id,image,title,date,link})=>(
            <div key={id} className='blog-post'>
              <div className='col-span-2'>
                <img src={image} alt={title} />
              </div>

              <div className='content'>
                <p>{date}</p>
                <h3>{title}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, "safari")
export default SafariWindow
