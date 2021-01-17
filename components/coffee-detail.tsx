import React from 'react'
import DisqusThread from '../components/disqus-thread'
import RadarChart from '../components/radar-chart'
import ratingStyles from '../styles/ratings.module.css'

const CoffeeDetail = () => {
  return (
    <div>
      <div className="grid grid-flow-row lg:grid-flow-col med:grid-flow-col justify-items-center gap-4">
        <div className="">
          <div>
            <div className="">
              <img
                className="max-w-sm"
                src="https://cdn.shopify.com/s/files/1/0148/9967/products/KenyaKaratu_1024x1024.png?v=1606243254"
                alt="coffee bag"
              />
            </div>
            <div className="grid grid-cols-2">
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
          <div className="grid grid-cols-2 mt-5">
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
          </div>
          <div className="grid grid-cols-1">
            <RadarChart />
          </div>
        </div>
        <div className="">
          <div>
            <div className="">
              <img
                className="max-w-sm"
                src="https://cdn.shopify.com/s/files/1/0148/9967/products/GuatemalaMartaMejiaMicroLot-WEB_5ab7cd7e-c0ac-4c48-9553-50116e0eede6_1024x1024.png?v=1602714949"
                alt="coffee bag"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="mt-4">
                <h2 className="text-3xl">Marta Mejia</h2>
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
          <div className="grid grid-cols-2 mt-5">
            <div>
              <ul className="text-sm">
                <li>Origin: Guatemala</li>
                <li>Process: Washed</li>
                <li>Roast Level: Medium</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl">Flavors</h3>
              <p className="mt-1">Strawberry, rose, and chocolate</p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <RadarChart />
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
