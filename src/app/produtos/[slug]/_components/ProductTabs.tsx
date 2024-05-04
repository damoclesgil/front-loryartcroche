import Tabs from '@/components/Tabs'

export type ProductTabsProps = {
  htmlContent: any
}

const ProductTabs = ({ htmlContent }: ProductTabsProps) => {
  return (
    <div className="mt-5">
      <Tabs
        contentFirstTab={
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        }
        contentSecondTab={<p>Muito bom mesmo, está de parabéns</p>}
      />
    </div>
  )
}

export default ProductTabs
