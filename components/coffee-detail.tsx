import React from 'react'
import DisqusThread from '../components/disqus-thread'
import RadarChart from '../components/radar-chart'
import ratingStyles from '../styles/ratings.module.css'

const CoffeeDetail = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-row md:justify-around sm:flex-col sm:place-items-center gap-6">
        <div>
          <div>
            <div className="justify-center">
              <img
                className="max-w-sm"
                src="https://cdn.shopify.com/s/files/1/0148/9967/products/KenyaKaratu_1024x1024.png?v=1606243254"
                alt="coffee bag"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="mt-4">
                <h2 className="text-3xl">Karatu</h2>
                <h3 className="mt-1 text-xl">Olympia Coffee</h3>
              </div>
              <div className="mt-6">
                <div className="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 row-span-2 gap-6 my-6">
            <div>
              <ul className="text-sm">
                <li>Origin: Kenya</li>
                <li>Process: Washed</li>
                <li>Roast Level: Medium</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl">Flavors</h3>
              <p className="mt-1">Fruit punch, herbs, and grapefruit</p>
            </div>
            <div className="col-span-2">
              <RadarChart />
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="flex justify-center">
              <img
                className="max-w-sm"
                src="https://cdn.shopify.com/s/files/1/0148/9967/products/ColombiaAmparoPajoyMicroLot27_1024x1024.png?v=1604683105"
                alt="coffee bag"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="mt-4">
                <h2 className="text-3xl">Amparao Pajay</h2>
                <h3 className="mt-1 text-xl">Olympia Coffee</h3>
              </div>
              <div className="mt-6">
                <div className="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 row-span-2 gap-6 my-6">
            <div>
              <ul className="text-sm">
                <li>Origin: Columbia</li>
                <li>Process: Washed</li>
                <li>Roast Level: Medium</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl">Flavors</h3>
              <p className="mt-1">Choolate, pecans, and strawberry</p>
            </div>
            <div className="col-span-2">
              <RadarChart />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-10 mt-20">
          <DisqusThread post={{ id: 'tbd', title: 'Coffee detail' }} />
        </div>
      </div>
    </div>
  )
}
export default CoffeeDetail
