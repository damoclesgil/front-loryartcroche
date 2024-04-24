type skeletonEffectProductsProps = {
  qtdLoadingItems: Number
}

const SkeletonEffectProducts = ({
  qtdLoadingItems = 3
}: skeletonEffectProductsProps) => {
  const loadingItems = Array.from(
    { length: Number(qtdLoadingItems) },
    (_, i) => i + 1
  )
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
        {loadingItems.map((i) => (
          <div
            className="flex flex-col items-center justify-center"
            key={`loader_${i}`}
          >
            <div className="animate-pulse bg-slate-200 w-[260px] h-[245px]"></div>
            <div className="animate-pulse bg-slate-200 w-[130px] flex items-center justify-center h-2 mt-4"></div>
            <div className="animate-pulse bg-slate-200 w-[80px] flex items-center justify-center h-2 mt-2"></div>
          </div>
        ))}
      </div>
    </>
  )
}
export default SkeletonEffectProducts
