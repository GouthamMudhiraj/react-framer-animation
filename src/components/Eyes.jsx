import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [pos, setPos] = useState({ x: -15, y: 0 }) 

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      let dx = mouseX - centerX
      let dy = mouseY - centerY

      const maxMove = 20

      dx = Math.max(-maxMove, Math.min(maxMove, dx / 20))
      dy = Math.max(-maxMove, Math.min(maxMove, dy / 20))

      setPos({ x: dx, y: dy })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div  className='w-full h-screen overflow-hidden'>
      <div
        className='relative w-full h-screen bg-cover bg-center'
        style={{
          backgroundImage:
            'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")',
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='flex gap-10'>

            {[1, 2].map((_, i) => (
              <div key={i} className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                  <div
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px)`
                    }}
                    className='absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100'
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
