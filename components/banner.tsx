'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
          <div className="flex justify-between p-3 text-sm shadow-lg bg-slate-800 text-slate-50 md:rounded">
            <div className="inline-flex text-slate-500">
              <a
                className="font-medium hover:underline text-emerald-400"
                href="https://ldhclic.fr"
                target="_blank"
                rel="noreferrer"
              >
                Découvrir nos offre<span className="hidden sm:inline"> </span>
              </a>{' '}
              
            </div>
            <button className="pl-2 ml-3 border-l border-gray-700 text-slate-500 hover:text-slate-400" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
