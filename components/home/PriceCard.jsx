import React from 'react'
import p1 from '@/public/images/p1.png';
import p2 from '@/public/images/p2.png';
import p3 from '@/public/images/p3.png';
import Image from 'next/image';
import { Switch } from "@/components/ui/switch";
import { BsInfoCircleFill } from "react-icons/bs";
const PriceCard = () => {
  const tiers = [
    {
      id: 'premium',
      title: 'Premium Followers',
      image: p1,
      headerBg: 'bg-[#1e90ff]',
      borderColor: 'border-[#1e90ff] shadow-[0_0_20px_rgba(30,144,255,0.3)]',
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
      borderColor: 'hover:border-[#d81b60] hover:shadow-[0_0_20px_rgba(216,27,96,0.3)]',
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
      borderColor: 'hover:border-[#10b981] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]',
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
    <div className="flex justify-center items-center flex-col">
         <div className="mb-10 mx-auto relative w-full max-w-sm rounded-full p-[1px] bg-[linear-gradient(90deg,#ff007f_0%,#8b5cf6_100%)] shadow-[0_0_15px_#ff00ff90,0_0_35px_#8b5cf680]">
            <div className="flex items-center gap-5 rounded-full bg-[#0B1325] px-4 py-1.5">
              {/* Switch */}
              <div className="border border-[#fff] rounded-xl p-0.5 w-[12%] flex items-center justify-center">
                <Switch className="data-[state=checked]:bg-[#1f2a44] data-[state=unchecked]:bg-[#1f2a44] [&>span]:bg-white " />
              </div>

              {/* Label */}
              <span className="flex-1 text-lg  text-white">
                I need vip followers
              </span>

              {/* Info */}
            <BsInfoCircleFill className='text-gray-200' />
            </div>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl border-2 bg-[#0E1017] transition-all duration-300 flex flex-col overflow-hidden ${
              tier.isSelected ? tier.borderColor : 'border-white/5 ' + tier.borderColor
            }`}
          >
            {/* Header section with Character Illustration */}
            <div className={`px-3 pt-4 flex justify-between items-center gap-3 ${tier.headerBg}`}>
              <h3 className="text-white text-xl  font-bold leading-tight ">
                {tier.title}
              </h3>
              <div className="w-14 h-14 relative flex items-center justify-center">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>

            {/* Features content section */}
            <div className="p-4 flex-1 flex flex-col justify-between gap-8">
              <ul className="space-y-4 w-full flex flex-col items-start">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 w-full">
                    {/* Checkmark Icon alignment fix */}
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.checkColor}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    
                    <div className="text-sm tracking-wide text-gray-300">
                      <p className={`
                        ${feature.isBold ? 'text-white font-semibold' : ''}
                        ${feature.isColor ? tier.textColor + ' font-bold' : ''}
                      `}>
                        {feature.text.includes("All features") ? (
                          <>
                            <span className={tier.textColor}>All features</span> of Active, plus:
                          </>
                        ) : feature.text}
                      </p>
                      
                      {feature.hasLink && (
                        <a href="#" className={`inline-block text-xs mt-1 hover:underline ${tier.textColor}`}>
                          {feature.linkText}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bottom Custom Indicator */}
              <div className="w-full flex justify-end items-end mt-auto">
                {tier.isSelected ? (
                  <div className="w-7 h-7 rounded-full bg-[#1e90ff] flex items-center justify-center shadow-md shadow-[#1e90ff]/40">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full border-2 border-white/20 bg-transparent" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriceCard;