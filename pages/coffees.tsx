import React from 'react'
import { useState } from 'react'
import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'

const CoffeeDetail = () => {
  return (
    <Layout>
      <main className="relative -mt-32">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <div className="divide-y divide-gray-200 lg:col-span-9">
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <header>
                      <h2 className="text-3xl font-bold leading-tight text-gray-900">
                        Holiday Blend
                      </h2>
                      <h3>Onda</h3>
                    </header>
                    <div>4 starts out of 5</div>
                    <div>
                      <img
                        src="https://cdn.shopify.com/s/files/1/1607/0925/products/OG-CHR-12oz_800x800.jpg?v=1606846854"
                        alt="hi"
                        width="228px"
                        height="178px"
                      />
                      <img
                        src="https://cdn.shopify.com/s/files/1/1607/0925/products/OG-CHR-12oz_800x800.jpg?v=1606846854"
                        alt="hi"
                        width="114px"
                        height="89px"
                      />
                      <img
                        src="https://cdn.shopify.com/s/files/1/1607/0925/products/OG-CHR-12oz_800x800.jpg?v=1606846854"
                        alt="hi"
                        width="114px"
                        height="89px"
                      />
                    </div>
                    <div>
                      <h4>Taste</h4>
                      <p>Chart here</p>
                    </div>
                    <div>
                      <p>Origin: Guatamala</p>
                      <p>Process: Washed</p>
                      <p>Roast Level: Medium</p>
                    </div>
                    <div>
                      <h4>Flavors</h4>
                      <p>Grapefruit, Blackberry, Honey</p>
                    </div>
                    <div>
                      <h4>Notes</h4>
                      <p>
                        This seasonally rotating, three component espresso was
                        crafted to pair tremendously with milk, and serve as a blend
                        for drinkers of all types.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default CoffeeDetail
