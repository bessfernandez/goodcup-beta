import React from 'react'
import DisqusThread from '../components/disqus-thread'
import RadarChart from '../components/radar-chart'
import ratingStyles from '../styles/ratings.module.css'

const CoffeeDetail = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col max-w-xl">
        {/* Note this is not truly centered as the image itself is not cropped to center, fixing */}
        <div className="ml-8">
          <img
            className="max-w-sm"
            src="https://cdn.shopify.com/s/files/1/1607/0925/products/OG-CHR-12oz_800x800.jpg?v=1606846854"
            alt="coffee bag"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="mt-4">
            <h2 className="text-3xl">Holiday Blend</h2>
            <h3 className="mt-2 text-2xl">Klatch Coffee</h3>
          </div>
          <div className="mt-6">
            <div className={ratingStyles.rating}>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="my-6">
            <ul className="text-base">
              <li>Origin: Guatamala</li>
              <li>Process: Washed</li>
              <li>Roast Level: Medium</li>
            </ul>
          </div>
          <div className="my-6">
            <h3 className="text-xl">Flavors</h3>
            <p className="mt-2">Grapefruit, blackberry, honey</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="mt-4">
            <h2 className="text-3xl">Taste</h2>
          </div>
          <div className=" bg-white grid grid-cols-2 gap-4 pl-4 max-w-lg">
            <RadarChart />
          </div>
        </div>
      </div>

      <div className="mt-40">
        <DisqusThread post={{ id: 'tbd', title: 'Coffee detail' }} />
      </div>
    </div>
  )
}
export default CoffeeDetail
