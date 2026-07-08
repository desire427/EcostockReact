import DetailLayout from './DetailLayout.jsx'
import DetailHeader from './DetailHeader.jsx'
import DetailOverview from './DetailOverview.jsx'
import DetailSummary from './DetailSummary.jsx'

function DetailProduit() {
  return (
    <DetailLayout>
      <DetailHeader />
      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <DetailOverview />
        <DetailSummary />
      </section>
    </DetailLayout>
  )
}

export default DetailProduit;
