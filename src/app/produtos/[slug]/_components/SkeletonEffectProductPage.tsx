'use client'
import { Icon } from '@iconify/react'

const SkeletonEffectProductPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr] justify-between px-2 mb-4">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-pulse bg-slate-200 w-full h-[400px]"></div>
          <div className="flex mt-2">
            <div className="animate-pulse bg-slate-200 w-[96px] h-[80px] flex items-center justify-center mx-1.5"></div>
            <div className="animate-pulse bg-slate-200 w-[96px] h-[80px] flex items-center justify-center mx-1.5"></div>
          </div>
        </div>
        <div>
          <div className="animate-pulse bg-slate-200 w-[190px] h-[70px] flex items-center justify-center"></div>
          <div className="animate-pulse bg-slate-200 w-[90px] h-[30px] flex items-center justify-center mt-5"></div>
          <div className="animate-pulse bg-slate-200 w-[90px] h-[20px] flex items-center justify-center mt-5"></div>
          <div className="animate-pulse bg-slate-200 w-[70px] h-[20px] flex items-center justify-center mt-2"></div>
          <div className="flex mt-3">
            <div className="animate-pulse bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full ml-[0rem] mx-1.5"></div>
            <div className="animate-pulse bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full mx-1.5"></div>
          </div>
          <Icon
            icon="material-symbols:favorite"
            className="text-slate-200 animate-pulse mt-3"
            fontSize={25}
          />
          <div className="animate-pulse bg-slate-200 w-[120px] h-[20px] flex items-center justify-center mt-2"></div>
          <div className="animate-pulse bg-slate-200 w-[150px] h-[20px] flex items-center justify-center mt-2"></div>
          <div className="animate-pulse bg-slate-200 w-[130px] h-[20px] flex items-center justify-center mt-2"></div>
          <div className="flex mt-3">
            <Icon
              icon="ic:baseline-pix"
              fontSize={20}
              className="text-slate-200 animate-pulse mr-3"
            />
            <Icon
              className="text-slate-200 animate-pulse mr-3"
              icon="material-symbols:credit-card-outline"
              fontSize={20}
            />
            <div className="animate-pulse bg-slate-200 w-[20px] h-[20px] flex items-center justify-center"></div>
          </div>
          <div className="animate-pulse bg-slate-200 w-full h-[40px] flex items-center justify-center rounded-md mt-6"></div>
        </div>
      </div>
    </>
  )
}
export default SkeletonEffectProductPage
