import React from 'react'
import DisqusThread from '../components/disqus-thread'
import RadarChart from '../components/radar-chart'
import ratingStyles from '../styles/ratings.module.css'

const CoffeeDetail = () => {
  return (
    <div>
      <div className="min-h-screen mt-6 flex flex-col">
        <div className="justify-center bg-white">
          <div className="bg-white grid grid-cols-2 gap-4">
            <div className="mt-4">
              <h2 className="text-2xl">Holiday Blend</h2>
              <h3 className="mt-2 text-base">Klatch Coffee</h3>
            </div>
            <div className="mt-4">
              <div className={ratingStyles.rating}>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white grid grid-cols-2 gap-4">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1607/0925/products/OG-CHR-12oz_800x800.jpg?v=1606846854"
              alt="coffee bag"
            />
          </div>
          <div className="my-6">
            <ul className="text-base">
              <li>Origin: Guatamala</li>
              <li>Process: Washed</li>
              <li>Roast Level: Medium</li>
            </ul>
            <h3 className="text-xl mt-6">Flavors</h3>
            <p className="mt-2">Grapefruit, blackberry, honey</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="mt-4">
            <h2 className="text-2xl">Taste</h2>
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
