import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Trans } from 'react-i18next'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ArticleTab() {
  let [categories] = useState({
    About: [
      {
        id: 1,
        slug: '#about_picsart_photo_editor',
        title: <Trans i18nKey='article.about.h2'></Trans>,
        pra: <Trans i18nKey='article.about.p'></Trans>,
        pra2: <Trans i18nKey='article.about.p2'></Trans>
      }
    ],
    Mod: [
      {
        id: 1,
        slug: '#what_is_picsart_mod_apk',
        title: <Trans i18nKey='article.mod.h2'></Trans>,
        pra: <Trans i18nKey='article.mod.p'></Trans>,
        pra2: <Trans i18nKey='article.mod.p2'></Trans>
      },
    ],
    Gold: [
      {
        id: 1,
        slug: '#what_is_picsart_gold_apk',
        title: <Trans i18nKey='article.gold.h2'></Trans>,
        pra: <Trans i18nKey='article.gold.p'></Trans>,
        pra2: <Trans i18nKey='article.gold.p2'></Trans>
      },
    ],
  })

  return (
    <div className="contener lg:px-48 px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-rose-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
               }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h2 id={post.slug}  className="lg:text-xl mb-4 text-gray-600 text-center leading-normal font-medium">
                      <span>{post.title}</span>
                    </h2>
                   <div className="lg:text-xl text-gray-600 leading-normal font-light">
                      {post.pra}
                    </div>
                    <div className="lg:text-xl mt-4  text-gray-600 leading-normal font-light">
                      {post.pra2} 
                    </div>
                    <Link
                      href={post.slug} 
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
