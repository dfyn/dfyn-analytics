import React, { useEffect } from 'react'
import './widget-overrides.css'

const HooksExample = (props) => {
  let { pairAddress, onPairNotSupported } = props
  useEffect(() => {
    if (window.itbWidgetInit) {
      window.itbWidgetInit({
        apiKey: 'm6fzDNLMNB2xPmnESQUbu6OEv7rDbUNx49IiJIBr',
        options: {
          colors: {
            series: ['#8c6651'],
          },
          protocol: 'dfyn_polygon',
          pairAddress: pairAddress,
          granularity: 'hourly',
          loader: true,
          hideNavigator: true,
          events: {
            onPairNotSupported: () => {
              onPairNotSupported(true)
            },
          },
        },
      })
    }
  }, [pairAddress, onPairNotSupported])

  return (
    <div className="widget-container">
      <div className="charts-container">
        <div data-target="itb-widget" data-type="protocol-fees-per-liquidity"></div>
        <div data-target="itb-widget" data-type="protocol-transactions-breakdown"></div>
        <div
          data-target="itb-widget"
          data-type="protocol-liquidity-variation"
          data-options='{ "pairTokenIndex": 0 }'
        ></div>
        <div
          data-target="itb-widget"
          data-type="protocol-liquidity-variation"
          data-options='{ "pairTokenIndex": 1 }'
        ></div>
        <div data-target="itb-widget" data-type="protocol-roi-calculator" className="full-width"></div>
      </div>
      <div className="footer">
        <div data-target="itb-widget" data-type="call-to-action"></div>
        <div data-target="itb-widget" data-type="powered-by"></div>
      </div>
    </div>
  )
}

export default HooksExample
