import React from 'react'
import { Trans } from 'react-i18next'

export default function AppInfo () {
    return (   
        <section className="flex justify-center my-6">
          <ul className="lg:text-xl text-gray-600 leading-normal font-light divide-y divide-gray-200 dark:divide-gray-800 lg:w-1/2">
            <li className="p-2 ">
              <b><Trans i18nKey='article.download.info.name'></Trans></b>
              <span className="ml-16">
                <Trans i18nKey='article.download.info.info.name'></Trans>
                </span>
            </li>
            <li className="p-2">
              <b><Trans i18nKey='article.download.info.genres'></Trans></b>
              <span className="ml-14">
              <Trans i18nKey='article.download.info.info.genres'></Trans>
              </span>
              </li>
            <li className="p-2">
              <b><Trans i18nKey='article.download.info.Version'></Trans></b>
              <span className="ml-14"> 
              <Trans i18nKey='article.download.info.info.Version'></Trans>
              </span></li>
            <li className="p-2">
              <b> <Trans i18nKey='article.download.info.install'></Trans></b>
              <span className="ml-16">
                <Trans i18nKey='article.download.info.info.install'></Trans>
                </span></li>
            <li className="p-2">
              <b> <Trans i18nKey='article.download.info.developer'></Trans></b>
              <span className="ml-8">
                <Trans i18nKey='article.download.info.info.developer'></Trans>
                </span></li>
            <li className="p-2">
              <b> <Trans i18nKey='article.download.info.requires'></Trans></b>
              <span className="ml-14">
              <Trans i18nKey='article.download.info.info.requires'></Trans>
              </span></li>
            <li className="p-2">
              <b><Trans i18nKey='article.download.info.size'></Trans></b>
              <span className="ml-20">
                <Trans i18nKey='article.download.info.info.size'></Trans>
              </span></li>
              <li className="p-2">
              <b> <Trans i18nKey='article.download.info.mod-features'></Trans></b>
              <span className="ml-1">
              <Trans i18nKey='article.download.info.info.mod-features'></Trans>
              </span></li>
            <li className="p-2">
              <b><Trans i18nKey='article.download.info.Updated'></Trans></b>
              <span className="ml-12">
                <Trans i18nKey='article.download.info.info.Updated'></Trans>
              </span></li>
          </ul>
        </section>
    )
  }

