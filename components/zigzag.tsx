import Image from 'next/image'

import FeatImage01 from '@/public/images/SEA.png'
import FeatImage02 from '@/public/images/smo.jpg'
import FeatImage03 from '@/public/images/CG.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <div className="inline-flex px-3 py-1 m-2 mb-4 text-sm font-semibold text-green-600 bg-green-200 rounded-full">Atteignez vos objectifs.</div>
            <h1 className="mb-4 h2">3 services, des solutions illimitées</h1>
            <p className="text-xl text-gray-400">La fusion de ces 3 stratégies donne une meilleure visibilité et des résultat rapide</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="h-auto max-w-full mx-auto md:max-w-none" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl text-purple-600 font-architects-daughter">Boostez votre visibilité en ligne avec le référencement sponsorisé</div>
                  <h3 className="mb-3 h3">Référencement Sponsorisé</h3>
                  <p className="mb-4 text-xl text-gray-400">Sponsoriser votre site internet sur les moteurs de recherche pour vous permettre d'atteindre vos objectifs d'acquisition ou de vente.</p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Visibilité immédiate, exposition maximale.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Ciblage précis, public intéressé.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Contrôle du budget, résultats concrets.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 rtl" data-aos="fade-up">
                <Image className="h-auto max-w-full mx-auto md:max-w-none" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="mb-2 text-xl text-purple-600 font-architects-daughter">Engagez votre audience et développez votre présence sur les réseaux sociaux</div>
                  <h3 className="mb-3 h3">Référencement Social Média</h3>
                  <p className="mb-4 text-xl text-gray-400">Un canal d'acquisition incontournable pour relayer vos messages publicitaires et atteindre la bonne cible, au bon moment.</p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Visibilité ciblée sur les réseaux sociaux</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Trafic qualifié vers votre site</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Engagement et relations durables</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="h-auto max-w-full mx-auto md:max-w-none" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl text-purple-600 font-architects-daughter">Libérez votre créativité visuelle avec notre expertise en création graphique</div>
                  <h3 className="mb-3 h3">Création graphique</h3>
                  <p className="mb-4 text-xl text-gray-400">Une équipe d'expert spécialisée dans la stratégie et le branding de marque chargée de concevoir ou repenser un environnement sur-mesure.</p>
                  <ul className="-mb-2 text-lg text-gray-400">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Visuel puissant, impact garanti</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Messages clairs, communication percutante</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Design pro, image renforcée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
