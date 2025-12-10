import TradingViewWidge from "@/components/TradingViewWidge"
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants"

const Home = () => {

   const scripturl = `https://s3.tradingview.com/external-embedding/embed-widget-` 

  return (
    <div className="flex min-h-screen home-wrapper  ">
     <section className="grid w-full gap-8 home-section">

  <div className="md:col-span-1 xl:col-span-1">
    <TradingViewWidge
      title="Market Overview"
      scriptUrl={`${scripturl}market-overview.js`}
      config={MARKET_OVERVIEW_WIDGET_CONFIG}
      className="custom-chart"
      height={400}
    />
  </div>

  <div className="md:col-span-1 xl:col-span-2">
    <TradingViewWidge
      title="Stock Heatmap"
      scriptUrl={`${scripturl}stock-heatmap.js`}
      config={HEATMAP_WIDGET_CONFIG}
      height={400}
    />
  </div>

</section>


      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
           <TradingViewWidge 
             scriptUrl={`${scripturl}timeline.js`}
             config={TOP_STORIES_WIDGET_CONFIG }
             className="custom-chart"
             height={400}
           />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-5">
          <TradingViewWidge 
             scriptUrl={`${scripturl}market-quotes.js`}
             config={MARKET_DATA_WIDGET_CONFIG}
             height={400}
           />
        </div>
      </section>
    </div>
  )
}

export default Home
