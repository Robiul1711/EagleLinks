import React from 'react'
import p1 from '@/public/images/p1.png';
import p2 from '@/public/images/p2.png';
import p3 from '@/public/images/p3.png';
import Image from 'next/image';
const PriceCard = () => {
  const tiers = [
    {
      id: 'premium',
      title: 'Premium Followers',
      image: p1,
      headerBg: 'bg-[#1e90ff]',
      borderColor: 'border-[#1e90ff] shadow-[0_0_15px_rgba(30,144,255,0.5)]',
      textColor: 'text-[#1e90ff]',
      checkColor: 'text-[#1e90ff]',
      isSelected: true,
      features: [
        { text: 'Premium followers', isBold: true, hasLink: true, linkText: "What's the difference?" },
        { text: 'Super Fast Delivery', isBold: true },
        { text: 'No password needed' },
        { text: '24-hour support' }
      ]
    },
    {
      id: 'active',
      title: 'Active Followers',
      image: p2,
      headerBg: 'bg-[#d81b60]',
      borderColor: 'border-transparent bg-[#171923]',
      textColor: 'text-[#d81b60]',
      checkColor: 'text-[#d81b60]',
      isSelected: false,
      features: [
        { text: 'Real Active followers', isBold: true, hasLink: true, linkText: "What's the difference?" },
        { text: 'Trusted Delivery', isBold: true },
        { text: '30 day refills', isBold: true },
        { text: 'No password needed' },
        { text: '24-hour support' }
      ]
    },
    {
      id: 'vip',
      title: 'VIP Followers',
      image: p3,
      headerBg: 'bg-[#10b981]',
      borderColor: 'border-transparent bg-[#171923]',
      textColor: 'text-[#10b981]',
      checkColor: 'text-[#10b981]',
      isSelected: false,
      features: [
        { text: 'All features of Active, plus:', isColor: true },
        { text: 'Real followers from Targeted users', isBold: true },
        { text: 'Hit the explore page and grow your engagement', isBold: true },
        { text: 'Instant Delivery Guaranteed', isBold: true },
        { text: 'VIP support with lifetime access', isBold: true }
      ]
    }
  ]

  return (
    <div className=" py-6 px-4 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl border-2 flex flex-col overflow-hidden bg-[#12141c] ${tier.borderColor}`}
          >
            {/* Header section with Eagle */}
            <div className={`px-4 pt-3 flex justify-between items-center ${tier.headerBg}`}>
              <h3 className="text-white text-lg font-bold leading-tight max-w-[150px]">
                {tier.title}
              </h3>
              <div className="w-16 h-16 relative flex items-center justify-center">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>

            {/* Features section */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex  gap-2">
                    {/* Dynamic checkmark color */}
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.checkColor}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    
                    <div className="text-gray-300 text-sm ">
                      <span className={`
                        ${feature.isBold ? ' text-white' : ''}
                        ${feature.isColor ? tier.textColor + ' font-medium' : ''}
                      `}>
                        {feature.text.split(tier.textColor).map((t, i) => <React.Fragment key={i}>{t}</React.Fragment>)}
                        {/* Special case formatting for the VIP tier text colorization */}
                        {feature.text.includes("All features") ? (
                          <>
                            <span className={tier.textColor}>All features</span> of Active, <br/>plus:
                          </>
                        ) : feature.text.includes("Hit the explore") ? (
                          <>
                            <span className="text-white">Hit the explore page</span> and grow your engagement
                          </>
                        ) : feature.text.includes("Targeted users") ? (
                          <>
                            <span className="text-white">Real followers</span> from <br/>Targeted users
                          </>
                        ) : feature.text.includes("Instant Delivery") ? (
                          <>
                            <span className="text-white">Instant Delivery</span> <br/>Guaranteed
                          </>
                        ) : feature.text.includes("VIP support") ? (
                          <>
                            <span className="text-white">VIP support</span> with <br/>lifetime access
                          </>
                        ) : (
                          feature.text
                        )}
                      </span>
                      {feature.hasLink && (
                        <a href="#" className={`block text-sm mt-0.5 hover:underline ${tier.textColor}`}>
                          {feature.linkText}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bottom Radio Circle Indicator */}
              <div className="mt-8 flex justify-end">
                {tier.isSelected ? (
                  <div className="w-8 h-8 rounded-full bg-[#1e90ff] flex items-center justify-center shadow-lg shadow-[#1e90ff]/50">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full border-2 border-gray-600 bg-transparent" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriceCard